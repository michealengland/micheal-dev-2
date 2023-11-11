import PropTypes from 'prop-types'
import createMarkup from '@utilities/createMarkup'
import Heading from '@components/atoms/Heading'
import styles from './Content.module.css'

export default function Content({content, title, titleTag='h2'}) {
  return (
    <section className={styles.content}>
      {title && <Heading className={styles.contentHeading} tag={titleTag}>{title}</Heading>}
      {content && <div dangerouslySetInnerHTML={ createMarkup(content) } className={styles.text} />}
    </section>
  )
}

Content.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}
