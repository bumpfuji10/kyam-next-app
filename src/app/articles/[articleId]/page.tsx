import { getArticle } from "../../../../lib/api";
import styles from './../../articles/[articleId]/ArticleShow.module.scss'
import { highlightHtml } from '../../../../lib/highlight';

// サーバーコンポーネントとして実装
export default async function ArticlesShowPage({ params }: any) {
  try {
    // Next.js 15ではparamsをawaitする必要がある
    const resolvedParams = await params;
    // サーバーサイドで記事を取得
    const article = await getArticle(resolvedParams.articleId);
    const highlightedContent = await highlightHtml(article.content);

    return (
      <main className={styles.main}>
        <div className="description">
          <h1>{article.title}</h1>
          <p>公開日: {new Date(article.publishedAt).toLocaleDateString("ja-JP")}</p>
          <div className="article-content">
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />
            ) : (
              <p>本文がありません。</p>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("記事の取得中にエラーが発生しました:", error);
    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>エラーが発生しました</h1>
          <p>記事の取得中に問題が発生しました。しばらくしてからもう一度お試しください。</p>
        </div>
      </main>
    );
  }
}
