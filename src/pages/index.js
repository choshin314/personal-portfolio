import React from "react"
import {graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

import Layout from '../components/layout'
import AboutSection from '../components/about/aboutSection.js'
import ProjectsSection from '../components/projects/projectsSection.js'
import ContactSection from '../components/contact/contactSection.js'
import img from '../images/og-img.jpg'

const IndexPage = ({data}) => {
  const { site: { siteMetadata } } = data;
  return (
    <Layout>
      <Helmet title={siteMetadata.title} htmlAttributes={{lang: 'en'}}>
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:title" content="Web Dev Portfolio for Shin Cho" />
        <meta property="og:image" content={img} />
        <meta property="twitter:title" content="Web Dev Portfolio for Shin Cho" />
        <meta property="twitter:image" content={img} />
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


