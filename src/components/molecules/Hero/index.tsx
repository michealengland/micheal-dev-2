import styles from './Hero.module.css'

interface HeroProps {
  content?: string,
  img?: string,
  imgAlt?: string,
  profileImg?: string,
  title?: string,
}

export default function Hero({title, content, img, imgAlt="", profileImg}: HeroProps) {
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={styles.hero} style={backgroundImage}>
      <div>
        {img && (
          <img
            alt={imgAlt}
            className={styles.avatar}
            height={512}
            src={profileImg}
            width={512}
          />
        )}
        {title && <h1 className={styles.title}>{ title }</h1>}
        {content && <p className={styles.content}>{ content }</p>}
      </div>
    </section>
  )
}
