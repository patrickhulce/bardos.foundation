import {Link} from 'gatsby'
import React from 'react'
import {Logo} from './logo'
import './header.css'

const Header = () => (
  <header className="relative">
    <div className="absolute top-0 inset-x-0">
      <div className="container mx-auto flex flex-row items-center">
        <Link to="/" className="text-white mx-2 my-4">
          <Logo />
        </Link>
        <Link
          to="/apply"
          className="bg-blue-700 hover:text-blue-300 text-white font-bold py-2 px-4 rounded cursor-pointer"
          style={{height: 'max-content', marginLeft: 'auto'}}
        >
          Apply for Scholarships
        </Link>
      </div>
      <div className="container mx-auto flex flex-row bg-green-700 text-white font-bold text-sm md:text-base rounded-lg p-4 font-montserrat">
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
  </header>
)

export default Header
