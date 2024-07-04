import { JSX } from 'react'

interface TextLinkProps {
  activeClassName?: string | null,
  children: JSX.Element[] | JSX.Element,
  to: string,
}

export default function TextLink({activeClassName, children, to, ...other}: TextLinkProps) {
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}