import createMarkup from '../../../utilities/createMarkup'
import Heading from '../../atoms/Heading'
import styles from './Content.module.css'

interface ContentProps {
  content?: string,
  title?: string,
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Content({content, title, titleTag='h2'}) {
  return (
    <section className={styles.content}>
      {title && <Heading className={styles.contentHeading} tag={titleTag}>{title}</Heading>}
      {content && <div dangerouslySetInnerHTML={ createMarkup(content) } className={styles.text} />}
    </section>
  )
}
