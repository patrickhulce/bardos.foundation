import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

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
    bardosFamily: file(relativePath: {eq: "bardos-reunion.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denesAgota1957: file(relativePath: {eq: "denes-agota-1957.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denesAgota: file(relativePath: {eq: "denes-agota.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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

const WhoWeArePage = ({data}) => (
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
            The Bardos Foundation is named in honor of Denes and Agota Bardos, two Hungarian
            refugees who escaped Soviet persecution to make a life together in America. The Bardos
            Foundation uploads the values they reflected to everyone they touched by providing aid
            to refugees and immigrants searching for a better life.
          </p>
          <p className="mt-2">
            Denes and Agota's descendants follow in their footsteps by managing the grant programs
            of the Bardos Foundation today.
          </p>
        </>
      }
      right={
        <>
          <div className="flex justify-center">
            <Img className="w-full rounded-lg" fluid={data.bardosFamily.childImageSharp.fluid} />
          </div>
        </>
      }
    />
    <PageSection
      left={
        <>
          <div className="flex justify-center">
            <Img className="w-64 rounded-lg" fluid={data.denesAgota1957.childImageSharp.fluid} />
            <Img className="w-64 rounded-lg" fluid={data.denesAgota.childImageSharp.fluid} />
          </div>
        </>
      }
      right={
        <>
          <h2 className="text-4xl mb-2">The Bardos Story</h2>
          <p>Denes Bardos and Agota Szabo were born in Budapest, Hungary in the late 1930s.</p>
        </>
      }
    />
  </Layout>
)

export default WhoWeArePage
