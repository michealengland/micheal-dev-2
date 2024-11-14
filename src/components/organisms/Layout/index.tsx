import React from 'react'
import styles from './Layout.module.css'
import Header from '../Header'
import Footer from '../Footer'
import ContentCTA from '../../molecules/ContentCTA'
import contentCTAImage from '../../../content/assets/charlie-and-the-mechanical-keyboard-2000x1000.webp'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Header />
      <main id="layout" className={styles.layout}>
        {children}
        <ContentCTA
          content="Seeking a skilled JS, Node, or React developer? Connect with me on LinkedIn. Let's discuss how I can contribute to your team's success!"
          img={contentCTAImage.src}
          label="Connect"
          title="Looking for My Next Role"
          url="https://www.linkedin.com/in/michealengland/"
        />
      </main>
      <Footer />
    </>
  )
}

export default Layout
