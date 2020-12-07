import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {window, document} from 'browser-monads'

import Particles from './particles'
import Navbar from './nav/navbar'
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
        <StyledHeader className="particle-wrapper" ref={headerRef} id="home-section">
            <Particles />
            <Wrapper>
              <Content>
                <h1>Hello, I'm <span>Shin Cho</span></h1>
                <p>I build web apps and websites.</p>
              </Content>
            </Wrapper>
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
    #tsparticles {
        z-index: 1;
    }
`