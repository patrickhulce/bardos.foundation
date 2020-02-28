import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {ParallaxImage, PageSection, ImageCard} from '../components/page-components'

import './home.css'

export const query = graphql`
  query {
    studentBooks: file(relativePath: {eq: "student-books.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    classroom: file(relativePath: {eq: "classroom.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    citizenship: file(relativePath: {eq: "citizenship.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <ParallaxImage className="max-h-screen" height="100vh" />
      <div className="absolute inset-x-0 z-10" style={{top: 170}}>
        <div className="container mx-auto text-white">
          <h1 className="md:text-6xl text-4xl text-shadow-subtle mx-2">
            We Help Immigrants <br />
            <span className="font-bold">Thrive</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-row text-center">
        <Link className="w-1/2" to="/what-we-do/#named-awards">
          <div className="h-64 relative">
            <Img
              className="w-full h-full object-cover z-background"
              fluid={data.studentBooks.childImageSharp.fluid}
            />
            <div className="absolute bg-green-700 opacity-75 inset-0"></div>
            <div className="absolute text-white text-shadow-subtle inset-0 flex flex-row items-center justify-center">
              <h3 className="text-xl md:text-3xl">Student Grants</h3>
            </div>
          </div>
        </Link>
        <Link className="w-1/2" to="/what-we-do/#grants">
          <div className="h-64 relative">
            <Img
              className="w-full h-full object-cover z-background"
              fluid={data.classroom.childImageSharp.fluid}
            />
            <div className="absolute bg-green-500 opacity-75 inset-0"></div>
            <div className="absolute text-white text-shadow-subtle inset-0 flex flex-row items-center justify-center">
              <h3 className="text-xl md:text-3xl">Teacher Grants</h3>
            </div>
          </div>
        </Link>
      </div>
      <PageSection
        left={
          <>
            <h2 className="text-4xl mb-2">What We Do</h2>
            <p>
              The Bardos Foundation provides support to refugees, first-generation, and
              second-generation immigrants through educational grants and assistance to other
              nonprofits with similar goals. This support includes the award of annual student
              awards, educational grants to teachers, donations to organizations such as the
              International Rescue Committee, and direct services to other local nonprofits.
            </p>
          </>
        }
        right={
          <>
            <ImageCard
              image={data.studentBooks.childImageSharp.fluid}
              title="Grants"
              text="The Bardos Foundation awards two annual named grants: the Denes I. Bardos and Agota M. Bardos Awards."
            />
            <ImageCard
              image={data.classroom.childImageSharp.fluid}
              title="Teacher Grants"
              text="Teachers in schools with high immigrant populations can apply for grants to cover the cost of supplies."
            />
            <ImageCard
              image={data.citizenship.childImageSharp.fluid}
              title="Nonprofit Assistance"
              text="The Bardos Foundation also donates to related organizations and provides support in the form of direct services."
            />
          </>
        }
      />
    </div>
  </Layout>
)

export default IndexPage
