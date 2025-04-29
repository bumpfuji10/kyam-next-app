import Link from "next/link"
import styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <h3 className={styles.footer__brand}>Kyam</h3>
          <div className={styles.footer__social}>
            <Link href="#" className="footer__social-link">
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="footer__social-link">
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="footer__social-link">
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          <div className={styles.footer__copyright}>
            <p>&copy; {new Date().getFullYear()} Kyam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
