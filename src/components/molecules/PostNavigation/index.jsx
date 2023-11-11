import TextLink from '@components/atoms/TextLink'
import PropTypes from 'prop-types'
import styles from './PostNavigation.module.css'

export default function PostNavigation({nextLabel, nextTo, prevLabel, prevTo}) {
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

PostNavigation.propTypes = {
  nextLabel: PropTypes.string,
  nextTo: PropTypes.string,
  prevLabel: PropTypes.string,
  prevTo: PropTypes.string
}
