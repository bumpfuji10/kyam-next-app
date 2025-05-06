import { getArticle } from "../../../../lib/api";
import styles from './../../articles/[articleId]/ArticleShow.module.scss';
import { highlightHtml } from '../../../../lib/highlight';
import { fetchOgp } from '../../../../lib/fetchOgp';
import OgpCard from './../../components/OgpCard'

// URL抽出用の正規表現関数（簡易版）
function extractExternalUrls(content: string): string[] {
  const urlMatches = [...content.matchAll(/href="([^"]+)"/g)];
  return urlMatches.map(m => m[1]);
}

// サーバーコンポーネント
export default async function ArticlesShowPage({ params }: any) {
  try {
    const resolvedParams = await params;
    const article = await getArticle(resolvedParams.articleId);
    const highlightedContent = await highlightHtml(article.content);

    // contentからURL抽出
    const urls = extractExternalUrls(article.content);

    // 各URLのOGP情報取得
    const ogpResults: Record<string, any> = {};
    for (const url of urls) {
      ogpResults[url] = await fetchOgp(url);
    }

    return (
      <main className={styles.main}>
        <div className="description">
          <h1>{article.title}</h1>
          <p>{new Date(article.publishedAt).toLocaleDateString("ja-JP")}</p>
          <div className="article-content">
            {article.content ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: highlightedContent }} />
                <div>
                {urls.map(url => (
                  ogpResults[url]?.title || ogpResults[url]?.description || ogpResults[url]?.image ? (
                    <OgpCard
                      key={url}
                      title={ogpResults[url].title}
                      description={ogpResults[url].description}
                      image={ogpResults[url].image}
                      url={url}
                    />
                  ) : null
                ))}
                </div>
              </>
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
