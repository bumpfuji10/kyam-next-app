import { getArticle } from "../../../../lib/api";
import styles from './../../articles/[articleId]/ArticleShow.module.scss';
import { highlightHtml } from '../../../../lib/highlight';
import { fetchOgp } from '../../../../lib/fetchOgp';
import OgpCard from './../../components/OgpCard';
import parse, { Element } from 'html-react-parser';

// URL抽出用の正規表現関数（簡易版）
function extractExternalUrls(content: string): string[] {
  const urlMatches = [...content.matchAll(/href="([^"]+)"/g)];
  return urlMatches.map(m => m[1]);
}

export default async function ArticlesShowPage({ params }: { params: { articleId: string } }) {
  try {
    const resolvedParams = params;
    const article = await getArticle(resolvedParams.articleId);
    const highlightedContent = await highlightHtml(article.content);

    // --- ① contentからURL抽出 ---
    const urls = extractExternalUrls(article.content);

    // --- ② 各URLのOGP情報取得 ---
    const ogpResults: Record<string, any> = {};
    for (const url of urls) {
      ogpResults[url] = await fetchOgp(url);
    }

    // --- ③ contentをパースし、リンクの直後にOGPカードを差し込む ---
    const contentWithCards = parse(highlightedContent, {
      replace(domNode) {
        if (domNode instanceof Element && domNode.name === 'a') {
          const href = domNode.attribs.href;
          if (href && ogpResults[href]) {
            return (
              <div>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {domNode.children.map(child => (typeof child === 'string' ? child : null))}
                </a>
                <OgpCard
                  title={ogpResults[href].title}
                  description={ogpResults[href].description}
                  image={ogpResults[href].image}
                  url={href}
                />
              </div>
            );
          }
        }
      }
    });

    return (
      <main className={styles.main}>
        <div className="description">
          <h1>{article.title}</h1>
          <p>{new Date(article.publishedAt).toLocaleDateString("ja-JP")}</p>
          <div className="article-content">
            {article.content ? (
              <div>
                {contentWithCards}
              </div>
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
