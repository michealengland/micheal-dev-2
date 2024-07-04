import TextLink from '../../atoms/TextLink'
import styles from './PostNavigation.module.css'

interface PostNavigationProps {
  nextLabel?: string,
  nextTo?: string,
  prevLabel?: string,
  prevTo?: string
}

export default function PostNavigation({nextLabel, nextTo, prevLabel, prevTo}: PostNavigationProps) {
  return (
    <nav
      aria-label="Post Navigation"
      className={styles.postNavigation}
      role="navigation"
    >
      <ul className={styles.inner}>
        <li>
          {prevTo && (
            <TextLink to={prevTo} rel="prev">
              ← {prevLabel || prevTo}
            </TextLink>
          )}
        </li>
        <li>
          {nextTo && (
            <TextLink to={nextTo} rel="next">
              {nextLabel || nextTo} →
            </TextLink>
          )}
        </li>
      </ul>
    </nav>
  )
}
