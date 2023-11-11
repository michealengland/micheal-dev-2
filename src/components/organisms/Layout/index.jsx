'use client'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Layout.module.css'
import Header from '@components/organisms/Header'
import Footer from '@components/organisms/Footer'

const Layout = ({children}) => {
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

Layout.propTypes = {
  children: PropTypes.node,
}
