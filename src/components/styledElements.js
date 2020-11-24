import React from 'react'
import styled from 'styled-components'

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
