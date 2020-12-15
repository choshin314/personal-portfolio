import React from "react"
import {graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import AboutSection from '../components/about/aboutSection.js'
import ProjectsSection from '../components/projects/projectsSection.js'
import ContactSection from '../components/contact/contactSection.js'

const IndexPage = ({data}) => {
  const { site: { siteMetadata } } = data;
  return (
    <Layout>
      <Helmet title={siteMetadata.title}>
        <meta name="description" content={siteMetadata.description} />
      </Helmet>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query helmetData {
    site {
      siteMetadata {
        title 
        description
      }
    }
  }
`


