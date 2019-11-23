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
    denes: file(relativePath: {eq: "denes-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const DenesPage = ({data}) => (
  <Layout>
    <SEO title="Denes I. Bardos Scholarship" />
    <ParallaxImage height={300} />
    <PageHeader text="Denes I. Bardos Scholarship" />
    <HeaderBottomBorder />
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Denes I. Bardos Scholarship</h2>
          <p>
            The Denes I. Bardos Scholarship is awarded to students studying science or engineering.
            Finalists embody the life and values of Denes Bardos by demonstrating their commitment
            to innovation, academic achievement, and community or family service. As with all Bardos
            Foundation grants, immigration history and financial need play a central role in awards.
          </p>
        </>
      }
      right={
        <>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-2">Eligibility</h2>
            <ul className="list-disc pl-10 mt-2">
              <li>
                First or second generation immigrants currently residing in the United States.
              </li>
              <li>
                Enrolled or enrolling in an undergraduate degree program within next 12 months.
              </li>
              <li>
                Declared or intending to declare a major in the natural sciences or engineering.
              </li>
            </ul>

            <Link
              to="https://docs.google.com/forms/d/1KI_mEhc9HifSRaXUX6J_he5Klk0YHvFeYO99qlZnd8s/edit"
              className="bg-blue-700 hover:text-blue-300 text-white font-bold py-2 px-4 mt-6 ml-2 rounded cursor-pointer"
              style={{width: 'fit-content'}}
            >
              Apply Now
            </Link>
          </div>
        </>
      }
    />
    <PageSection
      left={
        <>
          <div className="flex justify-center">
            <Img className="w-64 rounded-full" fluid={data.denes.childImageSharp.fluid} />
          </div>
        </>
      }
      right={
        <>
          <h2 className="text-4xl mb-2">About Denes Bardos</h2>
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
    />
  </Layout>
)

export default DenesPage
