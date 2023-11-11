import PropTypes from 'prop-types'
import Heading from '..//atoms/Heading'
import createMarkup from '@utilities/createMarkup'
import styles from './MediaContent.module.css'
import cn from 'classnames'
import Image from 'next/image'

export default function MediaContent({
  content,
  img,
  imgAlt='',
  imgClipRight=false,
  title,
  titleTag='h2'
}) {
  const imageClipClass = imgClipRight ? styles.clipRight : styles.clipLeft

  return (
    <section className={styles.mediaContent}>
      {(title || content) &&
        <div className={styles.content}>
          {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
          {content && <div dangerouslySetInnerHTML={ createMarkup(content) } />}
        </div>
      }
      {img &&
        <figure className={cn(styles.media, imageClipClass)}>
          <Image src={img} alt={imgAlt} width={1080} height={720} />
        </figure>
      }
    </section>
  )
}

MediaContent.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgClipRight: PropTypes.bool,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}
