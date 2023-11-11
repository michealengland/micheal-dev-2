import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} Mike England | View on{' '}
          <a href="https://github.com/michealengland/micheal-dev">Github</a>
        </p>
      </div>
    </footer>
  )
}
