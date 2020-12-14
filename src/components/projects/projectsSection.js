import React, {useContext} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {CSSTransition} from 'react-transition-group'

import {PaddedSection, SectionTitle, media} from '../styledElements'
import ProjectCard from './projectCard'
import ProjectModal from './projectModal'
import {ModalContext} from '../../context/modalContext'

const ProjectsSection = () => {
    const {currentProject, modalOpen} = useContext(ModalContext);
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

    return (
        <>
        <PaddedSection id="projects-section" bgColor="var(--light-grey)" clippedBgColor="white">
            <SectionTitle>PROJECTS</SectionTitle>
            <Flex>
                {projects.map(project => <ProjectCard project={project} key={project.name}/>)}
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