import {Link} from 'gatsby'
import React from 'react'
import {Logo} from './logo'
import './header.css'

const Footer = () => (
  <footer className="relative">
    <div className="relative bg-green-700 text-white w-screen" style={{marginTop: 50}}>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row pb-12">
          <div
            className="relative bg-green-900 rounded-lg p-4 m-2"
            style={{top: -30, maxHeight: 300}}
          >
            <Logo />
          </div>
          <div className="my-8 ml-4 md:ml-16 flex-grow">
            <h3 className="text-2xl mb-2">About Us</h3>
            <ul>
              <li>
                <Link to="/">What We Do</Link>
              </li>
              <li>
                <Link to="/about">Who We Are</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="my-8 ml-4 flex-grow">
            <h3 className="text-2xl mb-2">Scholarships</h3>
            <ul>
              <li>
                <Link to="/">Application</Link>
              </li>
              <li>
                <Link to="/scholarships">Agota M. Bardos</Link>
              </li>
              <li>
                <Link to="/scholarships">Denes I. Bardos</Link>
              </li>
            </ul>
          </div>
          <div className="my-8 ml-4 flex-grow">
            <h3 className="text-2xl mb-2">Governance</h3>
            <ul>
              <li>
                <Link to="/">501(c)(3) Exemption</Link>
              </li>
              <li>
                <Link to="/">Texas Exemption</Link>
              </li>
              <li>
                <Link to="/">Bylaws</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto flex flex-row items-center my-4 px-2">
      <span>© {new Date().getFullYear()} Bardos Foundation</span>
    </div>
  </footer>
)

export default Footer
