import PropTypes from 'prop-types'
import Heading from '..//atoms/Heading'
import styles from './PostHeader.module.css'

export default function PostHeader({content, title}) {
  return (
    <header className={styles.postHeader}>
      <div className={styles.inner}>
        <Heading className={styles.title} tag="h1">{title}</Heading>
        {content && <p className={styles.content}>{content}</p>}
      </div>
    </header>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}


