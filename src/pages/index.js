import React from "react"

import Layout from '../components/layout'
import AboutSection from '../components/about/aboutSection.js'
import ProjectsSection from '../components/projects/projectsSection.js'
import ContactSection from '../components/contact/contactSection.js'

const IndexPage = () => (
  <Layout>
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
