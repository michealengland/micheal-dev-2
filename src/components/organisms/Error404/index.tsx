import Button from '../../atoms/Button'
import styles from './Error404.module.css'

interface Error404Props {
  content?: string;
  img?: string;
  label?: string;
  title: string;
  to?: string;
}

export default function Error404({content, img, label, title, to='/'}: Error404Props) {
  const backgroundImage = img ? {backgroundImage: `url(${img})`} : undefined;

  return (
    <section className={styles.error404} style={backgroundImage}>
      <title>{title}</title>
      <h1 className={styles.title}>{title}</h1>
      {!!content && <p className={styles.content}>{content}</p>}
      <Button to={to} label={label} />
    </section>
  )
}

