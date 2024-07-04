import React from 'react'
import styles from './PostContent.module.css'
import cn from 'classnames'
import '@fontsource/fira-code/400.css'

interface PostContentProps {
  children?: React.ReactNode,
  className?: string
}

export default function PostContent({children, className}: PostContentProps) {
  return (
    <section className={cn(styles.postContent, className)}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
