import PropTypes from 'prop-types'
import Button from '@components/atoms/Button'
import styles from './Error404.module.css'

export default function Error404({content, img, label, title, to='/'}) {
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={styles.error404} style={backgroundImage}>
      <title>{title}</title>
      <h1 className={styles.title}>{title}</h1>
      {!!content && <p className={styles.content}>{content}</p>}
      <Button to={to} label={label} />
    </section>
  )
}

Error404.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
}
