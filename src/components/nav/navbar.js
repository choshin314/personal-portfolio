import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {media} from '../styledElements'

const Navbar = ({pinned}) => {

    return (
        <Nav id="navbar" className={pinned ? 'pinned' : ''}>
            <Menu>
                <Link to="#home-section" className="active-nav-link"><li>Home</li></Link>
                <Link to="#about-section"><li>About</li></Link>
                <Link to="#projects-section"><li>Projects</li></Link>
                <Link to="#contact-section"><li>Contact</li></Link>
            </Menu>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    display: none;
    @media(min-width: ${media.tablet}) {
        display: initial;
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 1rem 0;
        background: var(--navy);
        border-bottom: var(--light-navy) 3px solid;
        z-index: 10;
        &.pinned {
            position: fixed;
            top: 0;
            bottom: initial;
        }
    }
    
`

const Menu = styled.ul`
    list-style: none;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-family: inherit;
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0 2rem;
        &:hover, &:focus {
            color: var(--accent);
        }
        &.active-nav-link {
            color: var(--accent);
        }
    }
`