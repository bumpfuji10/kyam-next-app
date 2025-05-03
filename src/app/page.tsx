import Link from "next/link"
import Image from 'next/image';
import styles from "./home.module.scss"
import { getArticles } from "./../../lib/api";

const FETCH_ARTICLES_LIMIT: number = 3;

type Article = {
  id: string;
  title: string;
  publishedAt: string;
  content: string;
}

export default async function Home() {
  const { contents: articles } = await getArticles(FETCH_ARTICLES_LIMIT);

  return (
    <div className="container">
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
          <Link href="#projects" className="btn btn-primary">
            プロジェクトを見る
          </Link>
          <Link href="/about" className="btn btn-outline">
            Me
          </Link>
        </div>
      </section>

      {/* スキルセクション */}
      <section className={styles.skills}>
        <div className={styles.skills__header}>
          <h2 className={styles.skills__title}>スキル</h2>
          <p className={styles.skills__description}>私が得意とする技術スタックとスキルセット</p>
        </div>
        <div className={styles.skills__grid}>
          {[
            {
              title: "フロントエンド開発",
              description: "React、Next.js、TypeScript、CSSを使用したモダンなUI/UX設計と実装",
            },
            {
              title: "バックエンド開発",
              description: "Node.js、Express、GraphQL、RESTful APIの設計と実装",
            },
            {
              title: "フルスタック開発",
              description: "データベース設計からデプロイメントまで、エンドツーエンドの開発経験",
            },
          ].map((skill, index) => (
            <div key={index} className={styles.skills__card}>
              <div className={styles["skills__card-header"]}>
                <h3 className={styles.title}>{skill.title}</h3>
              </div>
              <div className={styles["skills__card-content"]}>
                <p className={styles.description}>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ブログセクション */}
      <section className={styles.blog}>
        <div className={styles["blog__header"]}>
          <h2 className={styles["blog__title"]}>最新のブログ記事</h2>
          <p className={styles["blog__description"]}>技術的な知見や経験を共有しています</p>
        </div>
        <div className={styles["blog__grid"]}>
          {articles.map((post: Article) => (
            <div key={post.id} className={styles["blog__card"]}>
              <div className={styles["blog__card-header"]}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.date}>
                  {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                </p>
              </div>
              <div className={styles["blog__card-content"]}>
                <p className={styles.description}>
                  {post.content.replace(/<[^>]+>/g, '').slice(0, 100) + "..."}
                </p>
              </div>
              <div className={styles["blog__card-footer"]}>
                <Link href={`/articles/${post.id}`} className={styles.btn}>
                  記事を読む
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["blog__more"]}>
          <Link href="/articles" className={`${styles.btn} ${styles["btn-outline"]}`}>
            すべての記事を見る
          </Link>
        </div>
      </section>


      {/* お問い合わせセクション */}
      <section className={styles.contact}>
        <div className={styles["contact__content"]}>
          <div className={styles["contact__info"]}>
            <h2 className={styles.title}>お問い合わせ</h2>
            <p className={styles.description}>プロジェクトについてのご相談やお問い合わせはこちらから</p>
          </div>
          <Link href="/contact" className={`${styles.btn} ${styles["btn-primary"]}`}>
            メッセージを送る
          </Link>
        </div>
      </section>
    </div>
  )
}
