import styles from './Logo.module.css'

const ArrowIcon = () => (
  <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>Path</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon id="Path" fill="currentColor" fillRule="nonzero" transform="translate(16.219000, 15.779000) rotate(-270.000000) translate(-16.219000, -15.779000) " points="31.471 31.558 31.471 27.218 5.741 15.748 31.471 4.216 31.471 0 0.967 13.764 0.967 17.732"></polygon>
    </g>
  </svg>
)

export default function Logo() {
  return (
    <span className={styles.logo}>
      <ArrowIcon />
      <ArrowIcon />
    </span>
  )
}
