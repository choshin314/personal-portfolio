import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'

import {PaddedSection, SectionTitle, media} from '../styledElements'

const ContactSection = () => (
    <PaddedSection id="contact-section" bgColor="var(--light-navy)" clippedBgColor="var(--light-grey)">
        <SectionTitle color="white">CONTACT ME</SectionTitle>
    </PaddedSection>
)

export default ContactSection

