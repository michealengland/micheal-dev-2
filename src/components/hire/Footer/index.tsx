import styles from './Footer.module.css'
import {
  SOCIAL_GITHUB,
} from '../../../consts'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          {`© ${new Date().getFullYear()} Mike England | `}
          <a href={SOCIAL_GITHUB}>View this site on GitHub</a>
        </p>
      </div>
    </footer>
  )
}
