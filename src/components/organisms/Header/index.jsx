import React from 'react'
import TextLink from '../../atoms/TextLink'
import Logo from '../../atoms/Logo/Logo.astro'
import styles from './Header.module.css'
import SocialLinks from '../../molecules/SocialLinks'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <TextLink className={styles.logo} to={'/'}>
          {/* <Logo /> */}
          TEMP LOGO
        </TextLink>
        <nav className={styles.menu}>
          <ul>
            <li>
              <TextLink to={'/blog'}>Blog</TextLink>
            </li>
          </ul>
        </nav>
        <SocialLinks className={styles.socialLinks} />
      </div>
    </header>
  )
}
