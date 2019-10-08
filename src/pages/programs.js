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

const ProgramsPage = () => (
  <Layout>
    <SEO title="Programs" />
    <ParallaxImage maxHeight={300} />
    <PageHeader text="Programs" />
    <HeaderBottomBorder />
    <PageSection
      id="scholarships"
      left={
        <>
          <h2 className="text-4xl mb-2">Scholarships</h2>
          <p>
            The Bardos Foundation awards multiple scholarships annually to first-generation and
            second-generation immigrants enrolling in a four-year degree program in the United
            States. Winners demonstrate their academic achievement, financial need, and outstanding
            community or family involvement. There are two named scholarships: the Denes I. Bardos
            scholarship for science and engineering and the Agota M. Bardos scholarship for the
            arts.
          </p>
        </>
      }
      right={
        <>
          <ImageCard
            image={require('../images/denes-portrait.jpg')}
            title="Denes I. Bardos"
            text="The Denes I. Bardos scholarship is awarded to students intending to study engineering or the natural sciences."
          />
          <ImageCard
            image={require('../images/agota-portrait.jpg')}
            title="Agota M. Bardos"
            text="The Agota M. Bardos scholarship is awarded to students intending to study the arts."
          />
        </>
      }
    />
    <PageSection
      id="grants"
      left={
        <>
          <ImageCard
            image={require('../images/school-supplies.jpg')}
            title="Classroom Supplies"
            text="Use a grant from the Bardos Foundation to fund classroom supplies for your students."
          />
          <ImageCard
            image={require('../images/community.jpg')}
            title="Community Involvement"
            text="Use grant funds to sponsor community projects and getting your students active!"
          />
        </>
      }
      right={
        <>
          <h2 className="text-4xl mb-2">Teacher Grants</h2>
          <p>
            The Bardos Foundation directly supports teachers in schools with high immigrant
            populations. Teachers can apply for grants for ordinary classroom supplies and community
            projects.
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
            members area of expertise to other nonprofits with similar missions.
          </p>
        </>
      }
      right={
        <>
          <ImageCard
            image={require('../images/donations.jpg')}
            title="Donations"
            text="The Bardos Foundation donates to organizations with similar goals."
          />
          <ImageCard
            image={require('../images/photography.jpg')}
            title="Photography"
            text="Pro bono photography services are available to elligible nonprofits in certain markets to capture their work and promote their cause."
          />
        </>
      }
    />
  </Layout>
)

export default ProgramsPage
