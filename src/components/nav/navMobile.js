import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {media} from '../styledElements'

const NavMobile = () => {
    const [navOpen, setNavOpen] = useState(false);
    function handleNav(e) {
        if (e.target.closest('#mobile-nav-btn')) {
            setNavOpen(prev => !prev);
        } else {
            setNavOpen(false);
        }
    }
    return (
        <Nav className={navOpen ? 'open' : ''} onClick={handleNav}>
            <NavButton id="mobile-nav-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </NavButton>
            <MenuWrapper>
                <Menu>
                    <Link to="#home-section" ><li>Home</li></Link>
                    <Link to="#about-section" ><li>About</li></Link>
                    <Link to="#projects-section" ><li>Projects</li></Link>
                    <Link to="#contact-section" ><li>Contact</li></Link>
                </Menu>
            </MenuWrapper>
        </Nav>
    )
}

export default NavMobile

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-end;
    background: var(--navy);
    border-bottom: var(--light-navy) 3px solid;
    z-index: 10;
    @media(min-width: ${media.tablet}){
        display: none;
    }
`
const NavButton = styled.div`
    width: 32px;
    height: 24px;
    position: relative;
    cursor: pointer;
    span {
        display: block;
        position: absolute;
        width: 100%;
        height: 5px;
        background: white;
        border-radius: 20px;
        overflow: hidden;
        transition: transform .2s ease-in-out;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--accent);
            opacity: 0;
            transition: opacity .2s ease-in-out;
        }
    }
    span:nth-child(2), span:nth-child(3) {
        top: 9.5px;
    }
    span:last-child {
        top: 20px;
    }
    ${Nav}.open & {
        span::after {
            opacity: 1;
        }
        span:first-child {
            transform: translateX(100%) scale(0);
        }
        span:nth-child(2) {
            transform: rotate(45deg);
        }
        span:nth-child(3) {
            transform: rotate(-45deg);
        }
        span:last-child {
            transform: translateX(-100%) scale(0);
        }
    }
`

const MenuWrapper = styled.div`
    background-color: var(--navy);
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    height: 50vh;
    border-bottom: 3px solid var(--light-navy);
    transition: transform .2s ease-out;
    transform: scaleY(0);
    transform-origin: top;
    ${Nav}.open & {
        transform: scaleY(1);
    }
`
const Menu = styled.ul`
    width: 100%;
    height: calc(100% - 56px);
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: opacity .3s ease-in;
    a {
        width: 100%;
        text-align: center;
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        font-family: inherit;
        margin-bottom: 1rem;
        &:focus {
            color: var(--accent);
        }
        
    }
    a:last-child {
        margin-bottom: 0;
    }
    ${Nav}.open & {
        opacity: 1;
    }
`