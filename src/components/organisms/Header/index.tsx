import TextLink from '../../atoms/TextLink'
import Logo from '../../atoms/Logo'
import styles from './Header.module.css'
import SocialLinks from '../../molecules/SocialLinks'
import {
  SOCIAL_GITHUB,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
} from '../../../consts'

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
              <TextLink to={'/github-cli-workflow-series'}>GH CLI</TextLink>
            </li>
            <li>
              <TextLink to={'https://stellarpages.app'}>Stellar Pages</TextLink>
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
                url: SOCIAL_GITHUB
              },
              {
                icon: 'linkedin',
                label: 'LinkedIn',
                url: SOCIAL_LINKEDIN
              },
              {
                icon: 'twitter',
                label: 'Twitter',
                url: SOCIAL_TWITTER
              }
            ]
          }
        />
      </div>
    </header>
  )
}
