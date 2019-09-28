import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Logo} from './logo'
import './header.css'

const Header = () => (
  <header className="relative">
    <picture
      className="max-h-screen w-screen object-cover"
      style={{
        zIndex: -1,
      }}
    >
      <source
        className="max-h-screen w-screen object-cover"
        srcset={require('../images/liberty-portrait.jpg')}
        media="(max-width: 600px)"
      />
      <img className="max-h-screen w-screen object-cover" src={require('../images/liberty.jpg')} />
    </picture>
    <div className="absolute top-0 inset-x-0">
      <div className="container mx-auto flex flex-row">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logo />
        </Link>
      </div>
      <div className="container mx-auto flex flex-row bg-blue-600 text-white rounded p-4">
        <Link to="/" className="mx-2">
          What We Do
        </Link>
        <Link to="/about" className="mx-2">
          Who We Are
        </Link>
        <Link to="/scholarships" className="mx-2">
          Scholarships
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
