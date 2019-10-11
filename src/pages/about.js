import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  ParallaxImage,
  PageHeader,
  PageSection,
  ImageCard,
  HeaderBottomBorder,
} from '../components/page-components'

export const query = graphql`
  query {
    denesAgota: file(relativePath: {eq: "denes-agota.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Who We Are" />
    <ParallaxImage height={300} />
    <PageHeader text="Who We Are" />
    <HeaderBottomBorder />
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Who We Are</h2>
          <p>
            The Bardos Foundation provides support to refugees, first-generation, and
            second-generation immigrants through educational grants and assistance to other
            nonprofits with similar goals. This support includes the award of annual scholarships,
            educational grants to teachers, donations to organizations such as the International
            Rescue Committee, and direct services to other local nonprofits.
          </p>
        </>
      }
      right={
        <>
          <ImageCard
            image={data.denesAgota.childImageSharp.fluid}
            title="Denes & Agota Bardos"
            text="The Bardos Foundation awards two annual scholarships: the Denes I. Bardos and Agota M. Bardos Scholarships."
          />
        </>
      }
    />
  </Layout>
)

export default AboutPage
