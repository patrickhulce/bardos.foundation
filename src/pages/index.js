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
      <div className="absolute inset-x-0" style={{top: 150}}>
        <div className="container mx-auto text-white">
          <h1 className="md:text-6xl text-4xl text-shadow-subtle">
            Helping Refugees <br />
            and Immigrants <span className="font-bold text-green-300">Thrive</span>
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
            <h3 className="text-xl">Scholarships</h3>
          </div>
        </div>
        <div className="w-1/2 h-64 relative">
          <img
            className="w-full h-full object-cover z-background"
            src={require('../images/classroom.jpg')}
          />
          <div className="absolute bg-green-500 opacity-75 inset-0"></div>
          <div className="absolute text-white text-shadow-subtle inset-0 flex flex-row items-center justify-center">
            <h3 className="text-xl">Non-profit Assistance</h3>
          </div>
        </div>
      </div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export default IndexPage
