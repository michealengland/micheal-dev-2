import React from 'react'
import createMarkup from '../../../utilities/createMarkup'

interface HeadingProps {
  children: React.ReactNode,
  className?: string | null,
  id?: string | null,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Heading({children, className, id, tag = 'h1'}: HeadingProps) {
  if (typeof children === 'string') {
    return React.createElement(tag, {
      className,
      id,
      dangerouslySetInnerHTML: createMarkup(children as any)
    })
  } else {
    return React.createElement(
      tag,
      {
        className,
        id
      },
      children
    )
  }
}
