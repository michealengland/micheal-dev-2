
import styles from './SocialLinks.module.css'
import Icon from '../../atoms/Icon'
import cn from 'classnames'

interface SocialLinksProps {
  className?: string,
  socialAccountItems?: {
    icon: 'github' | 'linkedin' | 'twitter',
    label: string,
    url: string
  }[]
}

export default function SocialLinks({className, socialAccountItems}: SocialLinksProps) {

  return (
    <nav
      className={cn(styles.socialLinks, className)}
      role="navigation"
      aria-label="social links"
    >
      <ul>
        {socialAccountItems && socialAccountItems.map((account, index) => {
          const {icon, label, url} = account

          return (
            <li key={`social-${index}`}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon className={styles.icon} icon={icon} title={label} />
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
