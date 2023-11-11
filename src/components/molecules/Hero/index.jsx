import PropTypes from 'prop-types'
import styles from './Hero.module.css'

export default function Hero({title, content, img, profileImg}) {
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={styles.hero} style={backgroundImage}>
      <div>
        <img
          alt="Micheal England"
          className={styles.avatar}
          height={512}
          src={profileImg}
          width={512}
        />
        {title && <h1 className={styles.title}>{ title }</h1>}
        {content && <p className={styles.content}>{ content }</p>}
      </div>
    </section>
  )
}

Hero.propTypes = {
  content: PropTypes.string,
  img: PropTypes.any,
  title: PropTypes.string,
}
