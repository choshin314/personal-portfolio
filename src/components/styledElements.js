import React from 'react'
import styled from 'styled-components'

export const media = {
    lgPhone: '600px',
    tablet: '768px',
    lgTablet: '1024px',
    laptop: '1400px',
    wide: '1800px'
}

export const PaddedSection = ({bgColor="white", clippedBgColor, children}) => (
    <Section bgColor={bgColor} padding={clippedBgColor ? "0 0 3rem 0" : "3rem 0"}>
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
    clip-path: polygon(100% 0, 50% 100%, 0 0);
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

    &::after {
        content: '';
        width: 5rem;
        position: absolute;
        left: 50%;
        bottom: -10px;
        height: 4px;
        border-radius: 2px;
        background-color: var(--navy);
        transform: translateX(-50%);
    }
`
