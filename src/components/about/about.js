import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {PaddedSection, SectionTitle, media} from '../styledElements'

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            contentfulAsset(title: {eq: "Profile Pic"}) {
                fluid {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            contentfulSkillSet(skillGroup: {eq: "All Skills"}) {
                skills {
                    name 
                    logo {
                        file {
                            url
                        }
                    }
                }
            }
        }
    `)
    return (
        <PaddedSection>
            <SectionTitle>ABOUT ME</SectionTitle>
            <Flex>
                <div className="personal-details">
                    <ImgFrame>
                        <Img fluid={data.contentfulAsset.fluid} alt="Shin Cho's mug"/>
                    </ImgFrame>
                    <h3>Why hello there!</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloribus dolorem velit labore rerum odio quaerat hic ipsam quibusdam praesentium! Aspernatur dolorem accusamus officia eos quidem, veniam cum minima reiciendis.
                    </p>
                </div>
                <div className="skills">
                    <h3>Skills / Proficiencies</h3>
                    <ul>
                        {data.contentfulSkillSet.skills.map(skill => (
                            <li>
                                {skill.name}
                                <img src={skill.logo.file.url} alt={skill.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Flex>
        </PaddedSection>
    )
}

export default About;

const Flex = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    .personal-details, .skills {
        flex: 1 0 calc(50% - 1rem);
        min-width: 300px;
        text-align: center;
    }
    .personal-details {
        margin-right: 1rem;
    }
    .skills {
        margin-left: 1rem;
        ul {
            padding-left: 0;
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        li {
            
            display: grid;
            grid-template-columns: 4fr 1fr;
            align-items: center;
            font-weight: 500;
            text-align: left;
            margin: .5rem;
            img {
                width: 100%;
            }
        }
    }
    @media(min-width: ${media.tablet}){
        grid-template-columns: 1fr 1fr;
    }
`
const ImgFrame = styled.div`
    width: 60%;
    max-width: 400px;
    margin: 0 auto 2rem auto;
    border-radius: 50%;
    overflow: hidden;
`