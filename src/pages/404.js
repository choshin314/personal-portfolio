import React from "react"
import {Helmet} from 'react-helmet'
import {graphql} from 'gatsby'
import Layout from "../components/layout"

const NotFoundPage = ({data}) => (
  <Layout>
    <Helmet title={`404 Not Found | ${data.site.siteMetadata.title}`} >
      <meta name="description" content="404 page for Shin Cho's portfolio" />
    </Helmet>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title 
      }
    }
  }
`
