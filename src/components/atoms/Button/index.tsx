import TextLink from '../TextLink'
import styles from './Button.module.css'
import cn from 'classnames'

interface ButtonProps {
  className?: string | null,
  label?: string | null,
  to: string
}

export default function Button({className, label, to}: ButtonProps) {
  return (
    <TextLink className={cn(styles.button, className)} to={to}>
      {label || to}
    </TextLink>
  )
}
