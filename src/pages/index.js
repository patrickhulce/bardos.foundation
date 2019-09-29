import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import './home.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <picture className="max-h-screen w-screen object-cover z-background">
        <source
          className="max-h-screen w-screen object-cover"
          srcset={require('../images/liberty-portrait.jpg')}
          media="(max-width: 600px)"
        />
        <img
          className="max-h-screen w-screen object-cover"
          src={require('../images/liberty.jpg')}
        />
      </picture>
      <div className="absolute inset-x-0" style={{top: 170}}>
        <div className="container mx-auto text-white">
          <h1 className="md:text-6xl text-4xl text-shadow-subtle mx-2">
            Helping Refugees <br />
            and Immigrants <span className="font-bold">Thrive</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-row text-center">
        <div className="w-1/2 h-64 relative">
          <img
            className="w-full h-full object-cover z-background"
            src={require('../images/student-books.jpg')}
          />
          <div className="absolute bg-green-700 opacity-75 inset-0"></div>
          <div className="absolute text-white text-shadow-subtle inset-0 flex flex-row items-center justify-center">
            <h3 className="text-xl">Student Scholarships</h3>
          </div>
        </div>
        <div className="w-1/2 h-64 relative">
          <img
            className="w-full h-full object-cover z-background"
            src={require('../images/classroom.jpg')}
          />
          <div className="absolute bg-green-500 opacity-75 inset-0"></div>
          <div className="absolute text-white text-shadow-subtle inset-0 flex flex-row items-center justify-center">
            <h3 className="text-xl">Teacher Grants</h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24 flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/2 px-8 mb-8">
          <h2 className="text-4xl mb-2">What We Do</h2>
          <p>
            The Bardos Foundation provides support to refugees, first-generation, and
            second-generation immigrants through educational grants and assistance to other
            nonprofits with similar goals. This support includes the award of annual scholarships,
            educational grants to teachers, donations to organizations such as the International
            Rescue Committee, and direct services to other local nonprofits.
          </p>
        </div>
        <div className="sm:w-1/2 px-8">
          <div className="bg-white rounded p-6 w-full flex flex-row overflow-hidden mb-8">
            <img
              className="w-24 h-24 object-cover rounded"
              src={require('../images/student-books.jpg')}
            />
            <div className="ml-4">
              <h3 className="text-xl">Scholarships</h3>
              <p className="text-sm h-16 overflow-hidden">
                The Bardos Foundation awards two annual scholarships: the Denes I. Bardos and Agota
                M. Bardos Scholarships.
              </p>
            </div>
          </div>
          <div className="bg-white rounded p-6 w-full flex flex-row overflow-hidden mb-8">
            <img
              className="w-24 h-24 object-cover rounded"
              src={require('../images/classroom.jpg')}
            />
            <div className="ml-4">
              <h3 className="text-xl">Teacher Grants</h3>
              <p className="text-sm h-16 overflow-hidden">
                Teachers in schools with high immigrant populations can apply for grants to cover
                the cost of supplies.
              </p>
            </div>
          </div>
          <div className="bg-white rounded p-6 w-full flex flex-row overflow-hidden mb-8">
            <img
              className="w-24 h-24 object-cover rounded"
              src={require('../images/citizenship.jpg')}
            />
            <div className="ml-4">
              <h3 className="text-xl">Nonprofit Assistance</h3>
              <p className="text-sm h-16 overflow-hidden">
                The Bardos Foundation also donates to related organizations and provides support in
                the form of direct services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
