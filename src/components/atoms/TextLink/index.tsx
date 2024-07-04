import React from 'react'

interface TextLinkProps {
  activeClassName?: string | null,
  children?: React.ReactNode,
  className?: string | null,
  rel?: string,
  to: string,
}

export default function TextLink({activeClassName, className, children, to, ...other}: TextLinkProps) {
  return (
    <a className={className} href={to} {...other}>
      {children}
    </a>
  )
}