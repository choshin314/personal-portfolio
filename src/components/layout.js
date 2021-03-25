import React from 'react'

import Header from './header'
import Footer from './footer'
import {ModalContextProvider} from '../context/modalContext'
import '../styles/index.css'

const Layout = props => {
    return (
        <ModalContextProvider>
            <Header />
            {props.children}
            <Footer />
        </ModalContextProvider>
    )
}

export default Layout