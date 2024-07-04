import React from 'react'

interface TextLinkProps {
  activeClassName?: string | null,
  children?: React.ReactNode,
  className?: string | null,
  to: string,
}

export default function TextLink({activeClassName, className, children, to, ...other}: TextLinkProps) {
  return (
    <a className={className} href={to} {...other}>
      {children}
    </a>
  )
}