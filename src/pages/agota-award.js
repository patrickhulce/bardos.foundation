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
  AwardDetails,
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

const AgotaPage = ({data}) => (
  <Layout>
    <SEO title="Agota M. Bardos Award" />
    <ParallaxImage height={300} />
    <PageHeader text="Agota M. Bardos Award" />
    <HeaderBottomBorder />
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Agota M. Bardos Award</h2>
          <p>
            The Agota M. Bardos Award is given to students in recognition for achievement in their
            community and the arts. Finalists embody the life and values of Agota Bardos by
            demonstrating their commitment to visual arts or music, academic rigor, and community or
            family service. As with all Bardos Foundation grants, immigration history and financial
            need play a central role in awards.
          </p>
        </>
      }
      right={
        <>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-2">Eligibility</h2>
            <ul className="list-disc pl-10 mt-2">
              <li>Immigrants currently residing in the United States.</li>
              <li>
                Students in their final year of high school or students enrolled in an undergraduate
                degree program within the past 6 months.
              </li>
            </ul>

            <a
              target="_blank"
              rel="noopener"
              href="https://docs.google.com/forms/d/1KI_mEhc9HifSRaXUX6J_he5Klk0YHvFeYO99qlZnd8s/viewform"
              className="bg-blue-700 hover:text-blue-300 text-white font-bold py-2 px-4 mt-6 ml-2 rounded cursor-pointer"
              style={{width: 'fit-content'}}
            >
              Apply Now
            </a>
          </div>
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
          <h2 className="text-4xl mb-2">About Agota Bardos</h2>
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
    <AwardDetails />
  </Layout>
)

export default AgotaPage
