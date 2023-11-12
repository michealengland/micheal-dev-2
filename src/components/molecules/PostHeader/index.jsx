import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import styles from './PostHeader.module.css'

export default function PostHeader({date, title, lastUpdated = null}) {
  const formattedDate = date ? date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : null

  const formattedLastUpdated = lastUpdated ? lastUpdated.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }) : null

  return (
    <header className={styles.postHeader}>
      <div className={styles.inner}>
        <Heading className={styles.title} tag="h1">{title}</Heading>
        { formattedDate &&
          <p className={styles.date}>Published: <time datetime={date} itemprop="dateModified">{formattedDate}</time></p>
        }
        { formattedLastUpdated && (
          <p className={styles.date}>Last updated: <time datetime={lastUpdated} itemprop="dateModified">{formattedLastUpdated}</time></p>
        ) }
      </div>
    </header>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.dateTime,
  lastUpdated: PropTypes.dateTime,
}


