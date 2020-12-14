import React, {useContext} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

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
        {modalOpen && currentProject && <ProjectModal />}
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