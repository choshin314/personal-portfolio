import React from 'react'
import styled from 'styled-components'

export const media = {
    lgPhone: '600px',
    tablet: '768px',
    lgTablet: '1024px',
    laptop: '1400px',
    wide: '1800px'
}

export const PaddedSection = ({bgColor="white", padding="3rem", children}) => (
    <Section bgColor={bgColor} padding={padding}>
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
    padding: ${props => props.padding} 0;
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
