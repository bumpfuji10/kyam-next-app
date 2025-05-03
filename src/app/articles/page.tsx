import { getArticles } from "./../../../lib/api";
import Link from "next/link";

export default async function ArticlesPage() {
  const data = await getArticles();
  const articles = data.contents;
  return (
    <main style={{ padding: "20px" }}>
      <h1>記事一覧</h1>
      <ul>
        {
          articles.map((article: any) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                {article.title}
              </Link>
            </li>
          ))
        }
      </ul>
      </main>
  );
}
