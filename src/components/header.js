import React from 'react'
import styled from 'styled-components'

import Particles from './particles'
import {Wrapper} from './styledElements'



function Header() {
    return (
        <StyledHeader className="particle-wrapper">
            <Particles />
            <Wrapper>
              <Content>
                <h1>Hello, I'm <span>Shin Cho</span></h1>
                <p>I build web apps and websites.</p>
              </Content>
            </Wrapper>
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
`