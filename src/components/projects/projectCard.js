import React, {useState} from 'react'
import styled from 'styled-components'
import {media} from '../styledElements'

const ProjectCard = (props) => {
    const [cardOpen, setCardOpen] = useState(false);
    function toggleCardOpen(e) {
        setCardOpen(prev => !prev)
    }
    function handleMouseEnter(e) {
        setCardOpen(true);
    }
    function handleMouseLeave(e) {
        setCardOpen(false);
    }
    console.log(cardOpen);
    return (
        <CardWrapper open={cardOpen}>
        <Card onClick={toggleCardOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} open={cardOpen}>
            <CardMain open={cardOpen}>

            </CardMain>
            <CardTabContainer open={cardOpen}>
                <Tab><a href="#" target="blank">Live Demo</a></Tab>
                <Tab><a href="#" target="blank">Code Repo</a></Tab>
                <Tab><button>More Details</button></Tab>
            </CardTabContainer>
        </Card>
        </CardWrapper>
    )
}

export default ProjectCard

const CardWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 5px;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 5px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        opacity: ${props => !props.open ? '0' : '1'};
        transition: opacity .3s cubic-bezier(.25,.8,.25,1);
        touch-action: none;
        pointer-events: none;
    }
`

const Card = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;  
    overflow: hidden;
    background: var(--navy);
    border-radius: inherit;
`

const CardMain = styled.div`
    position: relative;
    width: calc(100% + 1px);
    height: 100%;
    background: green;
    padding: 2rem;
    transition: transform .3s ease-out;
    z-index: 2;
    transform: translateX(${props => props.open ? '-100%' : '0'});
    @media(min-width: ${media.tablet}) {
        transform: translateX(${props => props.open ? '-300px' : '0'});
    }
`
const CardTabContainer = styled.ul`
    position: absolute;
    min-width: 200px;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    list-style: none;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    transition: transform .3s ease-out;
    transform: translateX(${props => props.open ? '0' : '-100%'});
    z-index: 1;
    @media(min-width: ${media.tablet}) {
        font-size: 2rem;
    }
    @media(min-width: ${media.tablet}) {
        width: 300px;
    }
`
const Tab = styled.li`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    padding: 1rem 2rem;
    background-color: var(--navy);
    cursor: pointer;
    border-bottom: var(--light-grey) 1.5px solid;
    &:last-child {
        border-bottom: none;
    }
    a, button {
        text-decoration: none;
        color: var(--light-grey);
        background-color: inherit;
        border: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: 700;
        padding: 0;
    }
    &:hover {
        background-color: var(--light-navy);
    }
    
`