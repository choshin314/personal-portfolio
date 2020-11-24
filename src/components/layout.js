import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/index.css'

const Layout = props => (
    <>
        <Header />
        {props.children}
        <Footer />
    </>
)

export default Layout