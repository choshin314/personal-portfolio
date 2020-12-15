import React from 'react'

import {PaddedSection, SectionTitle} from '../styledElements'
import ContactForm from './contactForm'

const ContactSection = () => (
    <PaddedSection id="contact-section" className="page-section" bgColor="var(--light-navy)" clippedBgColor="var(--light-grey)">
        <SectionTitle color="white" id="contact-section-title" className="section-title">CONTACT ME</SectionTitle>
        <ContactForm />
    </PaddedSection>
)

export default ContactSection

