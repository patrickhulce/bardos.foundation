import {Link} from 'gatsby'
import React from 'react'
import {Logo} from './logo'
import './header.css'

const Footer = () => (
  <footer className="relative">
    <div className="relative bg-green-700 text-white w-screen" style={{marginTop: 50}}>
      <div className="container mx-auto">
        <div className="flex flex-row pb-12">
          <div className="relative bg-green-900 rounded-lg p-4" style={{top: -30, maxHeight: 300}}>
            <Logo />
          </div>
          <div className="my-8 ml-16 flex-grow">
            <h3 className="text-2xl mb-2">About Us</h3>
            <ul>
              <li>What We Do</li>
              <li>Who We Are</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="my-8 ml-4 flex-grow">
            <h3 className="text-2xl mb-2">Scholarships</h3>
            <ul>
              <li>Application</li>
              <li>Agota M. Bardos</li>
              <li>Denes I. Bardos</li>
            </ul>
          </div>
          <div className="my-8 ml-4 flex-grow">
            <h3 className="text-2xl mb-2">Governance</h3>
            <ul>
              <li>501(c)(3) Exemption</li>
              <li>Texas Exemption</li>
              <li>Bylaws</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto flex flex-row items-center my-4">
      <span>© {new Date().getFullYear()} Bardos Foundation</span>
    </div>
  </footer>
)

export default Footer
