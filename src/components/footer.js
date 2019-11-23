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
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="my-8 ml-4 md:ml-16 flex-grow">
            <h3 className="text-2xl mb-2">About Us</h3>
            <ul>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
              </li>
              <li>
                <Link to="/what-we-do">What We Do</Link>
              </li>
              <li>
                <Link to="/what-we-do#scholarships">Scholarships</Link>
              </li>
              <li>
                <Link to="/what-we-do#grants">Teacher Grants</Link>
              </li>
              <li>
                <Link to="/what-we-do#nonprofits">Nonprofit Assistance</Link>
              </li>
            </ul>
          </div>
          <div className="my-8 ml-4 flex-grow">
            <h3 className="text-2xl mb-2">Programs</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://docs.google.com/forms/d/1KI_mEhc9HifSRaXUX6J_he5Klk0YHvFeYO99qlZnd8s/viewform"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <Link to="/scholarship-agota">Agota Bardos Scholarship</Link>
              </li>
              <li>
                <Link to="/scholarship-denes">Denes Bardos Scholarship</Link>
              </li>
            </ul>
          </div>
          <div className="my-8 ml-4 flex-grow">
            <h3 className="text-2xl mb-2">Compliance</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://drive.google.com/file/d/19YynyPuuP4TW2C-jcldpT_4JQQCMs0Kr/view?usp=sharing"
                >
                  501(c)(3) Exemption
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://docs.google.com/forms/d/1JXLY2vCcuXZP6u6FrIzarUl-rvHAUk-1JBTSDxDbsJo/viewform"
                >
                  Records Request
                </a>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container mx-auto flex flex-row items-center my-4 px-2">
      <span style={{flexGrow: 1}}>© {new Date().getFullYear()} Bardos Foundation</span>
      <span>All rights reserved.</span>
    </div>
  </footer>
)

export default Footer
