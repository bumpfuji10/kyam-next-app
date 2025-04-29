import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.logo}>Portfolio</a>
          <div className={styles.links}>
            <a href="/articles">記事</a>
            <a href="/about">Me</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
