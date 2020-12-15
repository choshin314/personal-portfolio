import React, {useEffect} from 'react'
import {document} from 'browser-monads'

import Header from './header'
import Footer from './footer'
import {ModalContextProvider} from '../context/modalContext'
import '../styles/index.css'

const Layout = props => {
    const options = { rootMargin: "-35% 0px", threshold: .5 };
    const highlightNav = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const prevActive = document.querySelectorAll('.active-nav-link')
                prevActive.forEach(navLink => {
                  navLink.classList.remove('active-nav-link');
                })
                const id = entry.target.id;
                const newActive = document.querySelectorAll(`[href="/#${id.split('-title')[0]}"]`)
                newActive.forEach(navLink => {
                  navLink.classList.add('active-nav-link');
                })
            }
        })
    };
    
    useEffect(() => {
      const observer = new IntersectionObserver(highlightNav, options);
      const observerTargets = document.querySelectorAll('.section-title');
      observerTargets.forEach(target => {
        observer.observe(target);
      })
      return () => {
          observerTargets.forEach(target => observer.unobserve(target))
      }
    }, [options])

    return (
        <ModalContextProvider>
            <Header />
            {props.children}
            <Footer />
        </ModalContextProvider>
    )
}

export default Layout