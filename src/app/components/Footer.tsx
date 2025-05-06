import Link from "next/link"
import styles from "./Footer.module.scss"
import { SiZenn } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <h3 className={styles.footer__brand}>Kyam</h3>
          <div className={styles.footer__social}>
            <Link href="https://zenn.dev/yokamada_dev" className="footer__social-link">
              <SiZenn />
            </Link>
            <Link href="#" className="footer__social-link">
              <FaXTwitter />
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
