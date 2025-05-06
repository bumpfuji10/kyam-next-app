import styles from './About.module.scss';
import cardStyles from './../card.module.scss'
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";

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
            <p className={cardStyles["aboutCard-description"]}>
              2022年7月に広島のスタートアップでWebエンジニアとして働いたあと、色々あり2023年2月から都内のスタートアップで働いてます。
              <br />現職ではサーバーサイドエンジニア(Ruby, Rails)として従事しておりますが、機能開発や改善においてはフロントエンドまで一貫して担当しています。
              <br />仕事以外では地域rbによく出没して、知見を深めるようにしています。使えそうなものは社内で共有して実践するようにしています。
              <br />最近はOOPやデータモデリングについて深く学び、設計パターンの理解を深めています。
            </p>
          </div>

          <div className={cardStyles.aboutCard}>
          <h2 className={cardStyles["aboutCard-header"]}>Skills</h2>
            <div className="aboutCard-skillBoard">
              <h3 className={cardStyles["aboutCard-subTitle"]}>JobSkills</h3>
              <div className={cardStyles["aboutCard-skillWrapper"]}>
                <p className={styles.gridTwoColumn}>
                  <span className={styles.skillItem}>
                    <DiRuby />Ruby
                  </span>
                  <span className={styles.skillItem}>
                    <SiRubyonrails />
                    Ruby on Rails
                  </span>
                  <span className={styles.skillItem}>
                    <IoLogoJavascript />JavaScript
                  </span>
                  <span className={styles.skillItem}>
                    <FaVuejs />Vue.js
                  </span>
                  <span className={styles.skillItem}>
                    <TbSql />SQL(MySQL)
                  </span>
                  <span className={styles.skillItem}>
                    <FaDocker />Docker
                  </span>
                </p>
              </div>
            </div>
            <div className='aboutCard-skillBoard'>
              <h3 className={cardStyles["aboutCard-subTitle"]}>ExperiencedSkills</h3>
              <div className={cardStyles["aboutCard-skillWrapper"]}>
                <p className={styles.gridTwoColumn}>
                  <span className={styles.skillItem}>
                    <FaPhp />PHP
                  </span>
                  <span className={styles.skillItem}>
                    <FaLaravel />
                    Laravel
                  </span>
                  <span className={styles.skillItem}>
                    <GrGraphQl />GraphQL
                  </span>
                  <span className={styles.skillItem}>
                    <SiTypescript />TypeScript
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className={cardStyles.aboutCard}>
            <h2 className={cardStyles["aboutCard-header"]}>職務経歴</h2>
            <div>
            <h3 className={cardStyles["aboutCard-subTitle"]}>
              2019年4月 - 2022年6月
              <br />株式会社ドッドウエルビー・エム・エス
              <br />セールス
            </h3>
            <p className={cardStyles["aboutCard-description"]}>
              <br />カメラをメインとしたセキュリティ商材を、マンション管理組合や賃貸物件オーナーに提案。
            </p>
              <h3 className={cardStyles["aboutCard-subTitle"]}>
                2022年7月 - 2022年12月
                <br />株式会社Stak
                <br />Webエンジニア(サーバーサイド)
              </h3>
              <p className={cardStyles["aboutCard-description"]}>
                <br />レンタルスペースのマッチングプラットフォームの開発に従事。
              </p>
              <h3 className={cardStyles["aboutCard-subTitle"]}>
                2023年2月 - 現在
                <br />オシロ株式会社
                <br />Webエンジニア(サーバーサイド・フロントエンド)
              </h3>
              <p className={cardStyles["aboutCard-description"]}>
                コミュニティプラットフォームの機能開発および保守運用、改善に従事。
                <br />社内ツールの改善や、問い合わせ対応なども行う。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
