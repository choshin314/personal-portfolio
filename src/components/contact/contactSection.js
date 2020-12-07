import React from 'react'

import {PaddedSection, SectionTitle, media} from '../styledElements'
import ContactForm from './contactForm'

const ContactSection = () => (
    <PaddedSection id="contact-section" bgColor="var(--light-navy)" clippedBgColor="var(--light-grey)">
        <SectionTitle color="white">CONTACT ME</SectionTitle>
        <ContactForm />
    </PaddedSection>
)

export default ContactSection

