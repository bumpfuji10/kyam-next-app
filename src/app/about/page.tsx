import styles from './About.module.scss';

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
          <div>
            <h2 className={styles.sectionSubtitle}>自己紹介</h2>
            <p className={styles.textGray300}>
              スケーラブルなWebアプリケーション開発に5年以上の経験を持つWebエンジニアです。
              効率的で保守性の高いソリューションを提供し、実際のビジネス課題を解決することに情熱を注いでいます。
            </p>
          </div>
          <div>
            <h2 className={styles.sectionSubtitle}>技術スキル</h2>
            <div className={styles.gridTwoColumn}>
              <div className={styles.skillItem}>
                <i className={`fas fa-code ${styles.iconBlue}`}></i>
                <span className={styles.textGray300}>JavaScript/TypeScript</span>
              </div>
              <div className={styles.skillItem}>
                <i className={`fab fa-react ${styles.iconBlue}`}></i>
                <span className={styles.textGray300}>React</span>
              </div>
              <div className={styles.skillItem}>
                <i className={`fab fa-node ${styles.iconBlue}`}></i>
                <span className={styles.textGray300}>Node.js</span>
              </div>
              <div className={styles.skillItem}>
                <i className={`fas fa-database ${styles.iconBlue}`}></i>
                <span className={styles.textGray300}>SQL/NoSQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* 職務経歴セクション */}
        <section className={styles.section}>
          <h2 className={styles.sectionSubtitle}>職務経歴</h2>
          <div className="space-y-6">
            <div>
              <h3 className={styles.sectionSubtitle}>シニアWebエンジニア</h3>
              <p className={styles.textGray400}>株式会社テックソリューションズ | 2020年 - 現在</p>
              <p className={styles.textGray300}>
                エンタープライズ規模のWebアプリケーション開発をリード。
                システムのパフォーマンスを40%改善
              </p>
            </div>
            <div>
              <h3 className={styles.sectionSubtitle}>フルスタックデベロッパー</h3>
              <p className={styles.textGray400}>株式会社デジタルイノベーションズ | 2018年 - 2020年</p>
              <p className={styles.textGray300}>
                複数のクライアント向けアプリケーションの開発・保守を担当
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
