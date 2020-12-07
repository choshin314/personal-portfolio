import React from 'react'
import styled from 'styled-components'

export const media = {
    lgPhone: '600px',
    tablet: '768px',
    lgTablet: '1024px',
    laptop: '1400px',
    wide: '1800px'
}

export const PaddedSection = ({id, bgColor="white", clippedBgColor, children}) => (
    <Section id={id} bgColor={bgColor} padding={clippedBgColor ? "0 0 3rem 0" : "3rem 0"}>
        {clippedBgColor && <SectionClippedBorder bgColor={clippedBgColor}></SectionClippedBorder>}
        <Wrapper>
            {children}
        </Wrapper>
    </Section>
)


export const Wrapper = styled.div`
    width: 90%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
`

export const Section = styled.section`
    background-color: ${props => props.bgColor};
    padding: ${props => props.padding};
`

export const SectionClippedBorder = styled.div`
    background: ${props => props.bgColor};
    height: 25px;
    clip-path: polygon(100% -1px, 50% 100%, 0 -1px);
    margin-bottom: 3rem;
    @media(min-width: ${media.tablet}){
        height: 50px;
    }
`


export const Flex = styled.div`
    display: flex;
`

export const SectionTitle = styled.h2`
    text-align: center;
    font-weight: 700;
    position: relative;
    margin-bottom: 3rem;
    color: ${props => props.color ? props.color : 'var(--navy)'};

    &::after {
        content: '';
        width: 5rem;
        position: absolute;
        left: 50%;
        bottom: -10px;
        height: 4px;
        border-radius: 2px;
        background-color: ${props => props.color ? props.color : 'var(--navy)'};
        transform: translateX(-50%);
    }
`
export const Button = styled.button`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.color ? props.color : "white"};
    padding: 1rem;
    background: transparent;
    border: white solid 2px;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    span {
        position: relative;
        z-index: 1;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        opacity: 0;
        transition: opacity .2s ease-in;
        z-index: 0;
    }
    &:hover::before {
        opacity: .3;
    }
`