import TextLink from '../../atoms/TextLink'
import Logo from '../../atoms/Logo'
import styles from './Header.module.css'
import SocialLinks from '../../molecules/SocialLinks'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <TextLink className={styles.logo} to={'/'}>
          <Logo />
        </TextLink>
        <nav className={styles.menu}>
          <ul>
            <li>
              <TextLink to={'/blog'}>Blog</TextLink>
            </li>
            <li>
              <TextLink to={'/drift'}>Drift</TextLink>
            </li>
          </ul>
        </nav>
        <SocialLinks
          className={styles.socialLinks}
          socialAccountItems={
            [
              {
                icon: 'github',
                label: 'GitHub',
                url: 'https://github.com/michealengland'
              },
              {
                icon: 'linkedin',
                label: 'LinkedIn',
                url: 'https://www.linkedin.com/in/michealengland/'
              },
              {
                icon: 'twitter',
                label: 'Twitter',
                url: 'https://twitter.com/mikelikethebike'
              }
            ]
          }
        />
      </div>
    </header>
  )
}
