import React from 'react'
import TextLink from '@components/atoms/TextLink'
import ProptTypes from 'prop-types'
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button({className, label, to}) {
  return (
    <TextLink className={cn(styles.button, className)} to={to}>
      {label || to}
    </TextLink>
  )
}

Button.propTypes = {
  className: ProptTypes.string,
  label: ProptTypes.string,
  to: ProptTypes.string.isRequired,
}
