import Heading from '../../atoms/Heading'
import createMarkup from '../../../utilities/createMarkup'
import styles from './MediaContent.module.css'
import cn from 'classnames'

interface MediaContentProps {
  content?: string,
  img?: string,
  imgAlt?: string,
  imgClipRight?: boolean,
  title?: string,
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function MediaContent({
  content,
  img,
  imgAlt='',
  imgClipRight=false,
  title,
  titleTag='h2'
}: MediaContentProps) {
  const imageClipClass = imgClipRight ? styles.clipRight : styles.clipLeft

  return (
    <section className={styles.mediaContent}>
      {(title || content) &&
        <div className={styles.content}>
          {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
          {content && <div dangerouslySetInnerHTML={ createMarkup(content as any) } />}
        </div>
      }
      {img &&
        <figure className={cn(styles.media, imageClipClass)}>
          <img src={img} alt={imgAlt} width={1080} height={720} />
        </figure>
      }
    </section>
  )
}
