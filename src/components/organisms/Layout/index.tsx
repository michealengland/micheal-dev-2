import React from 'react'
import styles from './Layout.module.css'
import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <main id="layout" className={styles.layout}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
