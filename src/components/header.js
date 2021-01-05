import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {window} from 'browser-monads'

import Particles from './particles'
import Navbar from './nav/navbar'
import NavMobile from './nav/navMobile'
import {Wrapper} from './styledElements'

function Header() {
    const [navPinned, setNavPinned] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    setNavPinned(true);
                }
                if(entry.isIntersecting) {
                    setNavPinned(false);
                }
            })
        }
        const options = { rootMargin: '-59px 0px -59px 0px' };
        const navObserver = new window.IntersectionObserver(callback, options);
        if(header) navObserver.observe(header);
        return () => navObserver.unobserve(header);
    }, [])
    return (
        <StyledHeader id="home-section" className="page-section particle-wrapper" ref={headerRef} >
            <Particles />
            <Wrapper>
              <Content>
                <h1 id="home-section-title" className="section-title">Hello, I'm <span>Shin Cho</span></h1>
                <p>I build web apps and websites.</p>
              </Content>
            </Wrapper>
            <NavMobile />
            <Navbar pinned={navPinned}/>
        </StyledHeader>
    )
}

export default Header;

const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const StyledHeader = styled.header`
    position: relative;
    height: 100vh;
    background-color: #0a192f;
    #tsparticles {
        z-index: 1;
    }
`