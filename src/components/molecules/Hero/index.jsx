import PropTypes from 'prop-types'
import styles from './Hero.module.css'
import Avatar from '@assets/mike-in-prague-2-500x500.jpg'
import Image from 'next/image'

export default function Hero({title, content, img}) {
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={styles.hero} style={backgroundImage}>
      <div>
        <Image
          alt="Micheal England"
          className={styles.avatar}
          height={512}
          src={Avatar}
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
