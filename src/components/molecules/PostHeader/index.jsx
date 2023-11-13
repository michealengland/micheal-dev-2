import PropTypes from 'prop-types'
import Heading from '../../atoms/Heading'
import styles from './PostHeader.module.css'
import formatBlogDate from '../../../utilities/formatBlogDate'

export default function PostHeader({date, title, lastUpdated, heroImage}) {
  const formattedDate = date ? formatBlogDate(date) : null
  const formattedLastUpdated = lastUpdated ? formatBlogDate(lastUpdated) : null

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
          <p className={styles.date}><time dateTime={date} itemProp="dateModified">{formattedDate}</time></p>
        }
        { formattedLastUpdated && (
          <p className={styles.lastUpdated}>Updated: <time dateTime={lastUpdated} itemProp="dateModified">{formattedLastUpdated}</time></p>
        ) }
      </div>
    </header>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.any,
  lastUpdated: PropTypes.any,
  heroImage: PropTypes.string,
}


