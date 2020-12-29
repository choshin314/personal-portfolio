import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    const { allContentfulSocial: { nodes }} = useStaticQuery(graphql`
        query socialQuery {
            allContentfulSocial {
                nodes {
                    name
                    url
                }
            }
        }
    `)
    const icons = [faInstagram, faLinkedin, faGithub]
    return (
        <StyledFooter>
            <ul>
                {nodes.map((social, i) => (
                    <li key={social.name}>
                        <a href={social.url} target="blank">
                            <FontAwesomeIcon icon={icons[i]} className="fa-fw"/>
                        </a>
                    </li>
                ))}
            </ul>
            <span>Built by Shin Cho</span>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 3rem;
    background-color: var(--navy);
    color: var(--light-grey);
    text-align: center;
    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding-left: 0;
        width: 200px;
        margin: 0 auto 1.5rem auto;
    }
    a {
        font-size: 2rem;
        color: var(--light-grey);
    }
`