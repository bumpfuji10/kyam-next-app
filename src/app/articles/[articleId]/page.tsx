import { getArticle } from "./../../../../lib/api";

type Props = {
  params: {
    articleId: string;
  };
};

export default async function ArticlesShowPage({ params }: Props) {
  const { articleId } = params;

  const article = await getArticle(articleId);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{article.title}</h1>
      <p>公開日: {new Date(article.publishedAt).toLocaleDateString("ja-JP")}</p>
      <div>
        <p>{article.content || "本文がありません。"}</p>
      </div>
    </main>
  );
}
