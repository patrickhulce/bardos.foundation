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
    schoolSupplies: file(relativePath: {eq: "school-supplies.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    community: file(relativePath: {eq: "community.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    donations: file(relativePath: {eq: "donations.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photography: file(relativePath: {eq: "photography.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denesPortrait: file(relativePath: {eq: "denes-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    agotaPortait: file(relativePath: {eq: "agota-portrait.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ProgramsPage = ({data}) => (
  <Layout>
    <SEO title="What We Do" />
    <ParallaxImage height={300} />
    <PageHeader text="What We Do" />
    <HeaderBottomBorder />
    <PageSection
      id="named-awards"
      left={
        <>
          <h2 className="text-4xl mb-2">Named Awards</h2>
          <p>
            The Bardos Foundation awards multiple grants annually to first-generation and
            second-generation immigrant students for their academic and community achievements.
            Winners demonstrate their academic rigor, financial need, and outstanding community or
            family involvement. There are two named awards: the Agota M. Bardos grant for the arts
            and the Denes I. Bardos grant for science and engineering.
          </p>
        </>
      }
      right={
        <>
          <ImageCard
            image={data.agotaPortait.childImageSharp.fluid}
            title="Agota M. Bardos Award"
            text="The Agota M. Bardos grant is awarded to students for achievement in the arts."
            link="/agota-award"
          />
          <ImageCard
            image={data.denesPortrait.childImageSharp.fluid}
            title="Denes I. Bardos Award"
            text="The Denes I. Bardos grant is awarded to students for achievement in engineering or the natural sciences."
            link="/denes-award"
          />
        </>
      }
    />
    <PageSection
      id="grants"
      left={
        <>
          <ImageCard
            image={data.schoolSupplies.childImageSharp.fluid}
            title="Classroom Supplies"
            text="Use a grant from the Bardos Foundation to fund classroom supplies for your students."
          />
          <ImageCard
            image={data.community.childImageSharp.fluid}
            title="Community Involvement"
            text="Use grant funds to sponsor special projects and getting your students active!"
          />
        </>
      }
      right={
        <>
          <h2 className="text-4xl mb-2">Teacher Grants</h2>
          <p>
            The Bardos Foundation directly supports teachers at schools with high immigrant
            populations. Teachers can{' '}
            <a
              target="_blank"
              rel="noopener"
              href="https://docs.google.com/forms/d/1KI_mEhc9HifSRaXUX6J_he5Klk0YHvFeYO99qlZnd8s/viewform"
            >
              apply
            </a>{' '}
            for grants for ordinary classroom supplies and community projects.
          </p>
        </>
      }
    />
    <PageSection
      id="nonprofits"
      left={
        <>
          <h2 className="text-4xl mb-2">Nonprofit Assistance</h2>
          <p>
            Our resources alone are not enough, so we work with other nonprofits to aid in our
            shared mission. The Bardos Foundation provides direct donations and services in our
            members area of expertise to other nonprofits.
          </p>
        </>
      }
      right={
        <>
          <ImageCard
            image={data.donations.childImageSharp.fluid}
            title="Donations"
            text="The Bardos Foundation donates to organizations with similar goals."
          />
          <ImageCard
            image={data.photography.childImageSharp.fluid}
            title="Photography"
            text="Pro bono photography services are available to elligible nonprofits in certain markets to capture their work and promote their cause."
          />
        </>
      }
    />
  </Layout>
)

export default ProgramsPage
