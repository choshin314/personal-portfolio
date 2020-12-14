import React, {useContext} from 'react'
import styled from 'styled-components'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSquare, faWindowClose} from '@fortawesome/free-regular-svg-icons'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import {ModalContext} from '../../context/modalContext'
import ImgSlider from './imgSlider.js'

const ProjectModal = () => {
    const {currentProject, setModalOpen} = useContext(ModalContext);
    const richTextDescription = JSON.parse(currentProject.descriptionLong.raw);
    function closeModal(e) {
        const id = e.target.id;
        console.log(e.target);
        if(id === "modal-bg" || e.target.closest("#modal-exit-btn") ) {
            setModalOpen(false);
        }
    }

    return (
        <ModalRoot id="modal-root" onClick={closeModal}>
            <ModalBg id="modal-bg" ></ModalBg>
            <ModalContainer>
                <ExitBtn id="modal-exit-btn" aria-label="close modal"><FontAwesomeIcon icon={faWindowClose}/></ExitBtn>
                <ImgSlider images={currentProject.modalImages} />
                <ContentDiv>
                    {documentToReactComponents(richTextDescription)}
                    <h2>Built with:</h2>
                    <ul>
                        {currentProject.tools.map(tool => (
                            <li key={tool}>
                                <FontAwesomeIcon icon={faSquare} className="fa-fw"/>
                                <span>{tool}</span> 
                            </li>
                        ))}
                    </ul>
                    <h2>Check it out:</h2>
                    <ul>
                        <li>
                            <a href={currentProject.demoUrl} target="blank">
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-fw" />
                                <span>Live Demo</span>
                            </a>
                        </li>
                        <li>
                            <a href={currentProject.repoUrl} target="blank">
                                <FontAwesomeIcon icon={faGithub} className="fa-fw" />
                                <span>{!currentProject.repoUrl2 ? "Github Repo" : "Github Repo - Frontend"}</span>
                            </a>
                        </li>
                        {currentProject.repoUrl2 && <li>
                            <a href={currentProject.repoUrl2} target="blank">
                                <FontAwesomeIcon icon={faGithub} className="fa-fw" />
                                <span>Github Repo - Backend</span>
                            </a>
                        </li>}
                    </ul>
                </ContentDiv>
            </ModalContainer>
        </ModalRoot>
    )
}

export default ProjectModal;

const ModalRoot = styled.div`
`

const ModalBg = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    min-height: 100vh;
    height: 100%;
    width: 100vw;
    background: var(--navy);
    opacity: .5;
    z-index: 100;
    ${ModalRoot}.modal-enter & {
        opacity: 0;
    }
    ${ModalRoot}.modal-enter-active & {
        opacity: .5;
        transition: opacity .3s ease-out;
    }
    ${ModalRoot}.modal-exit & {
        opacity: .5;
    }
    ${ModalRoot}.modal-exit-active & {
        opacity: 0;
        transition: opacity .3s ease-in;
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
    z-index: 120;
    overflow-y: auto;
    ${ModalRoot}.modal-enter & {
        opacity: 0;
        transform: translate(-50%, -100%);
    }
    ${ModalRoot}.modal-enter-active & {
        opacity: 1;
        transform: translate(-50%, -50%);
        transition: opacity .3s ease-out, transform .3s ease-out;
    }
    ${ModalRoot}.modal-exit & {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
    ${ModalRoot}.modal-exit-active & {
        opacity: 0;
        transform: translate(-50%, 100%);
        transition: opacity .3s ease-in, transform .3s ease-in;
    }
`
const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 3px solid var(--navy);
    padding: 1rem 1.5rem;
    p, ul {
        margin-top: 0;
    }
    ul {
        list-style: none;
        padding-left: 0;
        li {
            width: 100%;
            display: flex;
            margin-bottom: 5px;
            svg {
                flex-shrink: 0;
            }
            span {
                margin-left: 1rem;
            }
            a {
                text-decoration: none;
                font-weight: 500;
                color: var(--light-navy);
                position: relative;
            }
            a > span {
                position: relative;
            }
            a > span::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: var(--light-navy);
                transform: scaleX(0);
                transform-origin: right;
                transition: transform .2s ease-in;
            }
            a:hover > span::after, a:focus > span::after {
                transform: scaleX(1);
                transform-origin: left;
            }
        }
    }
`

const ExitBtn = styled.button`
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    border-radius: 5px;
    color: var(--navy);
    background: rgba(245, 245, 245, .3);
    cursor: pointer;
    z-index: 10;
    &:hover {
        color: var(--accent);
    }
`