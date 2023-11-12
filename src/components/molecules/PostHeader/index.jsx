import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import styles from './PostHeader.module.css'

export default function PostHeader({date, title, lastUpdated, heroImage}) {
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
      { heroImage && (
        <div className={styles.hero}>
          {heroImage && <img width={1020} height={510} src={heroImage} alt="" />}
        </div>
      ) }
      <div className={styles.inner}>
        <Heading className={styles.title} tag="h1">{title}</Heading>
        { formattedDate &&
          <p className={styles.date}>Published: <time datetime={date} itemprop="dateModified">{formattedDate}</time></p>
        }
        { formattedDate && (
          <p className={styles.date}>Last Modified: <time datetime={lastUpdated} itemprop="dateModified">{formattedDate}</time></p>
        ) }
        <hr className={styles.divider} />
      </div>
    </header>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.dateTime,
  lastUpdated: PropTypes.dateTime,
  heroImage: PropTypes.string,
}


