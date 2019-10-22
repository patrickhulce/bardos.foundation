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
            The Bardos Foundation is named in honor of Denes and Agota Bardos, two Hungarian
            refugees who escaped Soviet persecution to make a life together in America. The Bardos
            Foundation embodies the values that made their success possible by providing aid to
            refugees and immigrants searching for a better life.
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
    <PageSection
      left={
        <>
          <div className="flex justify-center">
            <Img className="w-64 rounded-full" fluid={data.agota.childImageSharp.fluid} />
          </div>
        </>
      }
      right={
        <>
          {' '}
          <h2 className="text-4xl mb-2">Agota Bardos</h2>
          <p>
            Agota (Agi) Bardos was a woman of active faith and fearless conviction. Bright,
            disciplined, hardworking, organized, and outspoken, she always thought of others first.
            Agi not only raised ten children but she also opened her heart and home to many who
            needed it. A devout Catholic and a Secular Franciscan, she was a very nurturing, holy,
            and loving example to everyone she encountered. Agi loved to garden, sew, paint, knit,
            crochet, pray, sing, and play the piano. An excellent cook, and ahead of her time, she
            must have made tens of thousands of healthy meals for her large family. She passed away
            from cancer in January of 2007.
          </p>
        </>
      }
    />
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Denes Bardos</h2>
          <p>
            Denes Bardos is man of brilliance and curiousity. Generous, funny, dutiful, empirical,
            and rebellious, he has lived through the worst of situations, survived, and come out
            beaming. A lifelong learner, Denes earned his PhD in metallurgy and had a successful
            career in orthopedic implant research. As a Knight of the Order of Malta and a Knight of
            the Holy Sepulcher, he often cooks for the homeless and would give you the shirt off his
            back without a second thought. A gifted storytell, Denes continues to share his
            harrowing and heartfelt experiences with his 31 grandchildren and 4 great-grandchildren.
          </p>
        </>
      }
      right={
        <>
          <div className="flex justify-center">
            <Img className="w-64 rounded-full" fluid={data.denes.childImageSharp.fluid} />
          </div>
        </>
      }
    />
  </Layout>
)

export default AboutPage
