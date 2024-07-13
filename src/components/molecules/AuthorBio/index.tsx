import styles from './AuthorBio.module.css'
import AuthorImage from '../../../content/assets/mike-england-square-profile-800x800.jpg'

export default function AuthorBio() {
  return (
    <div className={styles.authorBio}>
      <img
        className={styles.avatar}
        src={AuthorImage.src}
        alt="Micheal England"
        width={100}
        height={100}
      />
      <p className={styles.content}>
        Article by <strong>Micheal England</strong>.
      </p>
    </div>
  )
}
