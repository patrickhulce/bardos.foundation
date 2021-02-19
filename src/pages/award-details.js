import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  ParallaxImage,
  PageHeader,
  PageSection,
  HeaderBottomBorder,
} from '../components/page-components'

export const query = graphql`
  query {
    agota: file(relativePath: {eq: "agota-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denes: file(relativePath: {eq: "denes-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AwardDetailsPage = ({data}) => (
  <Layout>
    <SEO title="Award Details" />
    <ParallaxImage height={300} />
    <PageHeader text="Award Details" />
    <HeaderBottomBorder />
  </Layout>
)

export default AwardDetailsPage
