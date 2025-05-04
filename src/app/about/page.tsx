import styles from './About.module.scss';
import cardStyles from './../card.module.scss'
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";

export default function About() {
  const isVisible = true; // ここは仮でtrue。実際はuseEffectなどで制御可能

  return (
    <div className={`${styles.about} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>

        {/* 自己紹介セクション */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Kyam👋</h1>
        </section>

        {/* 自己紹介＋スキル */}
        <section className={`${styles.section} ${styles.gridTwoColumn}`}>
          <div className={cardStyles.aboutCard}>
            <h2 className={cardStyles["aboutCard-header"]}>Introduction</h2>
            <p className={styles["aboutCard-description"]}>
              2022年7月に広島のスタートアップでWebエンジニアとして働いたあと、色々あり2023年2月から都内のスタートアップで働いてます。
              <br />現職ではサーバーサイドエンジニア(Ruby, Rails)として従事しておりますが、機能開発や改善においてはフロントエンドまで一貫して担当しています。
              <br />仕事以外では地域rbによく出没して、知見を深めるようにしています。使えそうなものは社内で共有して実践するようにしています。
              <br />最近はOOPやデータモデリングについて深く学び、設計パターンの理解を深めています。
            </p>
          </div>
          <div>
            <h2 className={styles.sectionSubtitle}>Skills</h2>
            <div className={styles.gridTwoColumn}>
              <div className={styles.skillItem}>
                <DiRuby />
                <span className={styles.textGray300}>Ruby</span>
              </div>
              <div className={styles.skillItem}>
                <SiRubyonrails />
                <span className={styles.textGray300}>Ruby on Rails</span>
              </div>
              <div className={styles.skillItem}>
                <IoLogoJavascript />
                <span className={styles.textGray300}>JavaScript</span>
              </div>
              <div className={styles.skillItem}>
                <FaVuejs />
                <span className={styles.textGray300}>Vue.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* 職務経歴セクション */}
        <section className={styles.section}>
          <h2 className={styles.sectionSubtitle}>職務経歴</h2>
          <div className="space-y-6">
            <div>
              <h3 className={styles.sectionSubtitle}>Webエンジニア(サーバーサイド)</h3>
              <p className={styles.textGray400}>株式会社Stak | 2022年7月 - 2022年12月</p>
              <p className={styles.textGray300}>
                レンタルスペースのマッチングプラットフォームの開発に従事
              </p>
            </div>
            <div>
              <h3 className={styles.sectionSubtitle}>Webエンジニア(サーバーサイド・フロントエンド)</h3>
              <p className={styles.textGray400}>オシロ株式会社 | 2023年2月 - 現在</p>
              <p className={styles.textGray300}>
                コミュニティプラットフォームの機能開発および保守運用、改善に従事
                <br />
              </p>
            </div>
          </div>
        </section>

        {/* お問い合わせセクション */}
        <section className={styles.section}>
          <h2 className={styles.sectionSubtitle}>お問い合わせ</h2>
          <div className={styles.contactIcons}>
            <a href="mailto:contact@example.com" className={styles.contactLink}>
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
