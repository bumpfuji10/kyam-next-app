import Link from "next/link"
import Image from 'next/image';
import styles from "./home.module.scss"
import PostContent from "./components/PostContent";
import { getArticles } from "./../../lib/api";
import { sliceContent } from "./../app/utils/sliceConent";

const FETCH_ARTICLES_LIMIT: number = 3;

type Article = {
  id: string;
  title: string;
  publishedAt: string;
  content: string;
}

export default async function Home() {
  const { contents: articles } = await getArticles(FETCH_ARTICLES_LIMIT);
  const truncate100 = sliceContent(100);

  return (
    <div>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.hero__icon}>
          <div className={styles["hero__icon-inner"]}>
            <Image
              src="/me.png"
              alt="Logo"
              width={200}
              height={200}
              className={styles["hero__icon-img"]}
            />
          </div>
        </div>
        <h1 className={styles.hero__title}>Kyam👋</h1>
        <div className={styles.hero__actions}>
          <Link href="/about" className="btn btn-outline">
            Me
          </Link>
        </div>
      </section>

      {/* ブログセクション */}
      <section className={styles.blog}>
        <div className={styles["blog__header"]}>
          <h2 className={styles["blog__title"]}>最新のブログ記事</h2>
          <p className={styles["blog__description"]}>技術的な知見や経験を共有しています</p>
        </div>
        <div className={styles["blog__grid"]}>
          {articles.map((article: Article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className={styles["blog__card"]}>
              <div className={styles["blog__card-header"]}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.date}>
                  {new Date(article.publishedAt).toLocaleDateString("ja-JP")}
                </p>
              </div>
              <div className={styles["blog__card-content"]}>
                <PostContent html={truncate100(article.content)} className={styles.description} />
              </div>
              <div className={styles["blog__card-footer"]}>
                <span className={styles.btn}>記事を読む</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles["blog__more"]}>
          <Link href="/articles" className={`${styles.btn} ${styles["btn-outline"]}`}>
            すべての記事を見る
          </Link>
        </div>
      </section>
    </div>
  )
}
