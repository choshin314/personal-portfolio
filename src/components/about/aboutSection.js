import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {PaddedSection, SectionTitle, media} from '../styledElements'
import {useScrollReveal} from '../../hooks/useScrollReveal'

const AboutSection = () => {
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

    const personalDetailsRef = useRef(null);
    const skillsRef = useRef(null);

    const initObserver = useScrollReveal();

    useEffect(() => {
        if(personalDetailsRef.current && skillsRef.current) {
            initObserver([personalDetailsRef.current, skillsRef.current]);
        }
    }, [])

    return (
        <PaddedSection id="about-section" >
            <SectionTitle id="about-section-title" className="section-title">ABOUT ME</SectionTitle>
            <Flex>
                <div className="personal-details" ref={personalDetailsRef}>
                    <ImgFrame>
                        <Img fluid={data.contentfulAsset.fluid} alt="Shin Cho's mug"/>
                    </ImgFrame>
                    <h3>Hello there :)</h3>
                    <p>
                        I'm Shin.  I am an attorney-turned-web developer with a passion for making things for the web.    
                    </p>
                    <p>
                        I strive to build apps and websites not just with an emphasis on beautiful and responsive designs, but also on performance and functionality. 
                    </p>
                </div>
                <div className="skills" ref={skillsRef}>
                    <h3>Skills / Proficiencies</h3>
                    <ul>
                        {data.contentfulSkillSet.skills.map(skill => (
                            <li key={skill.name}>
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

export default AboutSection;

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
        p {
            max-width: 400px;
            margin: 0 auto 1rem auto;
        }
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