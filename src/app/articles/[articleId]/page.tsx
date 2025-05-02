import { getArticle } from "../../../../lib/api";
import styles from '../../page.module.css';

// サーバーコンポーネントとして実装
export default async function ArticlesShowPage({ params }: any) {
  try {
    // サーバーサイドで記事を取得
    const article = await getArticle(params.articleId);

    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>{article.title}</h1>
          <p>公開日: {new Date(article.publishedAt).toLocaleDateString("ja-JP")}</p>
          <div>
            {article.content ? (
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
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
