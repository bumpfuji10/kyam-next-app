import { getArticles } from "./../../../lib/api";  // axiosのクライアントからimport
import Link from "next/link";

export default async function ArticlesPage() {
  const data = await getArticles();
  const articles = data.contents;
  // structure
  // {
  //   "id": "a5h-gbtl6k",
  //   "title": "記事タイトル",
  //   "createdAt": "2025-02-02T09:10:06.611Z",
  //   "updatedAt": "2025-02-25T04:28:44.463Z",
  //   "publishedAt": "2025-02-25T03:31:35.271Z",
  //   "revisedAt": "2025-02-25T04:28:44.463Z"
  // }
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
