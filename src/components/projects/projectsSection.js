import React, {useContext, useRef, useEffect} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'

import {PaddedSection, SectionTitle} from '../styledElements'
import ProjectCard from './projectCard'
import ProjectModal from './projectModal'
import {ModalContext} from '../../context/modalContext'
import {useScrollReveal} from '../../hooks/useScrollReveal'

const ProjectsSection = () => {
    const { contentfulProjectSet: { projects }} = useStaticQuery(graphql`
        query MyQuery {
            contentfulProjectSet {
                projects {
                    name
                    descriptionShort
                    descriptionLong {
                        raw
                    }
                    tools
                    demoUrl
                    repoUrl
                    repoUrl2
                    cardImage {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    modalCoverImage {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    modalImages {
                        title
                        description
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    `)

    const {currentProject, modalOpen} = useContext(ModalContext);

    const projectCardRefs = useRef([]);
    const initObserver = useScrollReveal();

    useEffect(() => {
        if (projectCardRefs.current.length > 0) {
            initObserver(projectCardRefs.current);
        }
    }, [])

    return (
        <>
        <PaddedSection id="projects-section" className="page-section" bgColor="var(--light-grey)" clippedBgColor="white">
            <SectionTitle id="projects-section-title" className="section-title">PROJECTS</SectionTitle>
            <Flex>
                {projects.map(project => (
                    <ProjectCard 
                        project={project} 
                        key={project.name} 
                        refCallback={element => projectCardRefs.current.push(element)}
                    />
                ))}
            </Flex>
        </PaddedSection>
        <CSSTransition
            in={modalOpen && currentProject}
            timeout={300}
            classNames="modal"
            unmountOnExit
        >
            <ProjectModal />
        </CSSTransition>
        </>
    )
}

export default ProjectsSection;

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    height: 100%;
    & > h2 {
        flex: 1 0 100%;
        text-align: center;
        font-weight: 700;
    }
`