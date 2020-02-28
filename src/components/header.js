import {Link} from 'gatsby'
import React from 'react'
import {Logo} from './logo'
import './header.css'

const Header = () => (
  <header className="relative z-10">
    <div className="absolute top-0 inset-x-0 ">
      <div className="inset-x-0" style={{background: 'rgba(255, 255, 255, 0.3)'}}>
        <div className="container mx-auto flex flex-row items-center justify-end py-2">
          <Link to="/" className="text-white mx-2 my-4" style={{marginRight: 'auto'}}>
            <Logo />
          </Link>
          <a
            href="mailto:contact@bardos.foundation"
            className="hidden sm:inline hover:text-blue-500 text-blue-700 font-bold py-2 px-4 cursor-pointer"
          >
            contact@bardos.foundation
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://docs.google.com/forms/d/1KI_mEhc9HifSRaXUX6J_he5Klk0YHvFeYO99qlZnd8s/viewform"
            className="bg-blue-700 hover:text-blue-300 text-white font-bold py-2 px-4 mr-2 rounded cursor-pointer"
            style={{height: 'max-content'}}
          >
            Apply Now
          </a>
        </div>
      </div>
      <div className="inset-x-0" style={{background: 'rgba(50, 135, 90, 0.8)'}}>
        <div className="container mx-auto flex flex-row text-white font-bold text-sm md:text-base uppercase rounded-lg py-4 font-montserrat">
          <Link
            to="/who-we-are"
            className="px-2 border-r hover:text-green-300 truncate"
            style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            Who We Are
          </Link>
          <Link
            to="/what-we-do"
            className="px-2 border-r hover:text-green-300 truncate"
            style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            What We Do
          </Link>
          <Link
            to="/agota-award"
            className="px-2 border-r hover:text-green-300 truncate"
            style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            Agota Award
          </Link>
          <Link to="/denes-award" className="px-2 hover:text-green-300 truncate">
            Denes Award
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
