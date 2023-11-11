import React from 'react'
import PropTypes from 'prop-types'

export default function TextLink({children, to, activeClassName, partiallyActive, ...other}) {
  return (
    <a
      // TODO FIX props on this.
      // activeClassName={activeClassName}
      // partiallyActive={partiallyActive}
      href={to}
      {...other}
    >
      {children}
    </a>
  )
}

TextLink.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  partiallyActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
}