import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'

import {PaddedSection, SectionTitle, media} from '../styledElements'
import ProjectCard from './projectCard'

const ProjectsSection = () => {
    const { contentfulProjectSet: { projects }} = useStaticQuery(graphql`
        query MyQuery {
            contentfulProjectSet {
                projects {
                    name
                    descriptionShort
                    demoUrl
                    repoUrl
                    repoUrl2
                    cardImage {
                        fluid {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    `)
    return (
        <PaddedSection bgColor="var(--light-grey)">
            <SectionTitle>PROJECTS</SectionTitle>
            <Flex>
                {projects.map(project => <ProjectCard project={project} />)}
            </Flex>
        </PaddedSection>
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