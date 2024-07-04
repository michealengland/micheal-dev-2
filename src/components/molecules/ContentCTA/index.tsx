import Heading from '../../atoms/Heading'
import styles from './ContentCTA.module.css'
import createMarkup from '../../../utilities/createMarkup'
import cn from 'classnames'
import Button from '../../atoms/Button'

interface ContentCTAProps {
  content?: string,
  img?: string,
  label?: string,
  title?: string,
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  url?: string
}

export default function ContentCTA({content, img, label, title, titleTag='h2', url}: ContentCTAProps) {
  const hasImgClass = !! img ? styles.hasImg : ''
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={cn(styles.cta, hasImgClass)} style={backgroundImage}>
      <div className={styles.inner}>
        {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
        {content &&
          <>
            {!!img && <hr />}
            <div className={styles.content} dangerouslySetInnerHTML={createMarkup(content as any)} />
          </>
        }
        {url && <Button className={styles.button} label={label} to={url} />}
      </div>
    </section>
  )
}
