import Heading from '@components/atoms/Heading'
import PropTypes from 'prop-types'
import styles from './ContentCTA.module.css'
import createMarkup from '@utilities/createMarkup'
import cn from 'classnames'
import Button from '@components/atoms/Button'

export default function ContentCTA({content, img, label, title, titleTag='h2', url}) {
  const hasImgClass = !! img ? styles.hasImg : ''
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={cn(styles.cta, hasImgClass)} style={backgroundImage}>
      <div className={styles.inner}>
        {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
        {content &&
          <>
            {!!img && <hr />}
            <div className={styles.content} dangerouslySetInnerHTML={createMarkup(content)} />
          </>
        }
        {url && <Button className={styles.button} label={label} to={url} />}
      </div>
    </section>
  )
}

ContentCTA.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  url: PropTypes.string,
}
