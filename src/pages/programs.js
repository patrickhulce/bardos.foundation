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
            image={require('../images/student-books.jpg')}
            title="Denes I. Bardos"
            text="The Denes I. Bardos scholarship is awarded to students intending to study engineering or the natural sciences."
          />
          <ImageCard
            image={require('../images/student-books.jpg')}
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
            The Bardos Foundation provides support to refugees, first-generation, and
            second-generation immigrants through educational grants and assistance to other
            nonprofits with similar goals. This support includes the award of annual scholarships,
            educational grants to teachers, donations to organizations such as the International
            Rescue Committee, and direct services to other local nonprofits.
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
