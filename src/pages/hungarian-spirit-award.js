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
  AwardDetails,
} from '../components/page-components'

export const query = graphql`
  query {
    laszlo: file(relativePath: {eq: "laszlo-herczku.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HungarianSpiritAwardPage = ({data}) => (
  <Layout>
    <SEO title="Hungarian Spirit Award" />
    <ParallaxImage height={300} />
    <PageHeader text="Hungarian Spirit Award" />
    <HeaderBottomBorder />
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Hungarian Spirit Award</h2>
          <p>
            The Hungarian Spirit Award is given to students in recognition for achievement in the face of adversity.
            Each year, the named honoree is rotated among great Hungarian immigrants submitted by the community.
            Finalists embody the life and values of Hungarian refugees by demonstrating their commitment
            to community or family service. As with all Bardos Foundation grants,
            immigration history and financial need play a central role in awards.
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
            <Img className="w-64 rounded-full" fluid={data.laszlo.childImageSharp.fluid} />
          </div>
        </>
      }
      right={
        <>
          <h2 className="text-4xl mb-2">About Laszlo Herczku</h2>
          <p>
            This year's Hungarian Spirit Award honoree is <a href="https://www.newbaker.com/obituaries/Laszlo-Herczku?obId=37787284" target="_blank" rel="noopener">Laszlo Herczku</a>.
            Laszlo was a resilient soul whose life journey spanned continents.
            Born in Budapest and trained as a shoemaker, he escaped revolutionary turmoil to embrace freedom in the US.
            A proud Army veteran and devoted General Motors employee, Laszlo built a life defined by
            hard work and quiet brilliance. A passionate lover of boxing, soccer, and Hungary, he
            reveled in life's simple pleasures and cherished his family. Ever meticulous and
            warm—-his charming “Hunglish” conversations brightened every gathering—-Laszlo's legacy
            of determination and kindness endures in this year's Hungarian Spirit Award.
          </p>


        </>
      }
    />
    <AwardDetails />
  </Layout>
)

export default HungarianSpiritAwardPage
