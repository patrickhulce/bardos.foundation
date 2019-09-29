import {Link} from 'gatsby'
import React from 'react'
import {Logo} from './logo'
import './header.css'

const Header = () => (
  <header className="relative">
    <div className="absolute top-0 inset-x-0">
      <div className="inset-x-0" style={{background: 'rgba(255, 255, 255, 0.3)'}}>
        <div className="container mx-auto flex flex-row items-center justify-end py-2">
          <Link to="/" className="text-white mx-2 my-4" style={{marginRight: 'auto'}}>
            <Logo />
          </Link>
          <a
            to="/apply"
            className="hidden sm:inline hover:text-blue-500 text-blue-700 font-bold py-2 px-4 cursor-pointer"
          >
            contact@bardos.foundation
          </a>
          <Link
            to="/apply"
            className="bg-blue-700 hover:text-blue-300 text-white font-bold py-2 px-4 mr-2 rounded cursor-pointer"
            style={{height: 'max-content'}}
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="inset-x-0" style={{background: 'rgba(50, 135, 90, 0.8)'}}>
        <div className="container mx-auto flex flex-row text-white font-bold text-sm md:text-base uppercase rounded-lg py-4 font-montserrat">
          <Link
            to="/"
            className="px-2 border-r hover:text-green-300 truncate"
            style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            What We Do
          </Link>
          <Link
            to="/about"
            className="px-2 border-r hover:text-green-300 truncate"
            style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}
          >
            Who We Are
          </Link>
          <Link to="/scholarships" className="px-2 hover:text-green-300 truncate">
            Scholarships
          </Link>
        </div>
      </div>
    </div>
  </header>
)

export default Header
