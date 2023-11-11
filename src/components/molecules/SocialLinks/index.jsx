
import styles from './SocialLinks.module.css'
import Icon from '@components/atoms/Icon'
import cn from 'classnames'
import PropTypes from 'prop-types'

export default function SocialLinks({className}) {
  const socialAccounts = [
    {
      icon: 'github',
      label: 'Github',
      url: 'https://github.com/michealengland'
    },
    {
      icon: 'linkedin',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/michealengland/'
    },
    {
      icon: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/mikelikethebike'
    }
  ]

  return (
    <nav
      className={cn(styles.socialLinks, className)}
      role="navigation"
      aria-label="social links"
    >
      <ul>
        {socialAccounts.map((account, index) => {
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

SocialLinks.propTypes = {
  className: PropTypes.string
}
