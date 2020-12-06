import React, {useState} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import {media} from '../styledElements'

const ProjectCard = ({project}) => {
    const [cardOpen, setCardOpen] = useState(false);
    function toggleCardOpen(e) {
        setCardOpen(prev => !prev)
    }

    return (
        <CardWrapper open={cardOpen} className={cardOpen ? 'open' : ''}>
            <Card onClick={toggleCardOpen} onMouseEnter={()=> setCardOpen(true)} onMouseLeave={() => setCardOpen(false)}>
                <CardMain>
                    <ImgWrapper>
                        <Img 
                            fluid={project.cardImage.fluid} 
                            alt={`screenshot of ${project.name} project`}
                        />
                    </ImgWrapper>
                    <CardMainContent>
                        <h2>{project.name}</h2>
                        <p>{project.descriptionShort}</p>
                    </CardMainContent>
                </CardMain>
                <CardTabContainer>
                    <Tab>
                        <a href={project.demoUrl} target="blank">
                            Live Demo 
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </Tab>
                    <Tab>
                        <a href={project.repoUrl} target="blank">
                            {project.repoUrl2 ? 'Frontend Code' : 'Code Repo'} 
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Tab>
                    {project.repoUrl2 && <Tab>
                        <a href={project.repoUrl2} target="blank">
                            Backend Code 
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Tab>}
                    <Tab>
                        <button>
                            More Info 
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </button>
                    </Tab>
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
        opacity: 0;
        transition: opacity .3s cubic-bezier(.25,.8,.25,1);
        touch-action: none;
        pointer-events: none;
    }
    &.open::after {
        opacity: 1;
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
    transition: transform .3s ease-out;
    z-index: 2;
    transform: translateX(0);
    ${CardWrapper}.open & {
        transform: translateX(-100%);
        @media(min-width: ${media.tablet}) {
            transform: translateX(-300px);
        }
    }

`
const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
    }
    .gatsby-image-wrapper::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: var(--navy);
        opacity: .8;
        transition: opacity .3s ease-in;
        @media(min-width: ${media.tablet}) {
            opacity: .6;
        }
    }
    ${CardWrapper}.open & .gatsby-image-wrapper::after {
        opacity: 0;
    }
`
const CardMainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    color: var(--light-grey);
    padding: 2rem;
    transition: opacity .2s ease-out;
    opacity: 1;
    h2, p {
        border-radius: 10px;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    ${CardWrapper}.open & {
        opacity: 0;
    }
    @media(min-width: ${media.tablet}) {
        display: block;
        width: 50%;
        text-align: left;
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
    transform: translateX(-100%);
    z-index: 1;
    ${CardWrapper}.open & {
        transform: translateX(0);
    }
    @media(min-width: ${media.tablet}) {
        width: 300px;
    }
`
const Tab = styled.li`
    flex: 1 0 auto;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    background-color: var(--navy);
    border-bottom: var(--light-navy) 1.5px solid;
    &:last-child {
        border-bottom: none;
    }
    a, button {
        width: 100%;
        padding: 1rem 2rem;
        text-align: center;
        text-decoration: none;
        color: var(--light-grey);
        background-color: inherit;
        border: none;
        font-size: inherit;
        font-family: inherit;
        font-weight: 700;
        cursor: pointer;
        svg {
            margin-left: .5rem;
        }
    }
    &:hover, &:focus, &:active {
        background-color: var(--light-navy);
    }
    @media(min-width: ${media.tablet}) {
        a, button {
            text-align: right;
        }
    }
`