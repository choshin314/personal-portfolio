import React, {useContext} from 'react'
import styled, {keyframes} from 'styled-components'
import Img from 'gatsby-image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import {ModalContext} from '../../context/modalContext'

const ProjectModal = () => {
    const {currentProject, modalOpen} = useContext(ModalContext);
    const richTextDescription = JSON.parse(currentProject.descriptionLong.raw);

    return (
        <ModalBg className={modalOpen && currentProject ? "modal-open" : ""}>
            {/* {documentToReactComponents(richTextDescription)} */}
        </ModalBg>
    )
}

export default ProjectModal;

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: var(--navy);
    opacity: 0;
    transition: opacity .3s ease-out;
    display: none;
    &.modal-open {
        display: block;
        opacity: .5;
    }
`

const slideUp = keyframes`
    from {
        transform: translate(-50%, 100%);
    }
    to {
        transform: translate(-50%, -50%);
    }
`

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 600px;
    max-height: calc(100vh - 10rem);
    background-color: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 5px;
    transform: translate(-50%, -50%);
    animation: ${slideUp} .2s linear;
    z-index: 120;
    overflow-y: auto;
`
const StyledImg = styled(Img)`
    max-height: 300px;
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;

    div.heading {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        h2, span {
            font-size: 1.2rem;
        }
    }
    div.description {
        margin-bottom: 2rem;
    }
`
const AddToOrder = styled.button`
    position: relative;
    background-color: var(--primary);
    color: white;
    font-family: 'Manrope', 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    padding: 1rem 2rem;
    cursor: pointer;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        opacity: 0;
        transition: opacity .3s ease-out;
    }
    &:active::after, &:hover::after {
        opacity: 1;
    }
    &[disabled] {
        background-color: grey;
        &:active::after, &:hover::after {
            opacity: 0;
        }
    }
`

const Exit = styled.button`
    font-size: 1.5rem;
    position: absolute;
    top: .5rem;
    right: .5rem;
    background: rgba(0,0,0,.5);
    border: none;
    color: var(--primary);
    cursor: pointer;
`