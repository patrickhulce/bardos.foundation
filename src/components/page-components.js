import React from 'react'
import Img from 'gatsby-image'

export const ParallaxImage = ({className, height}) => {
  const classes = `${className} w-screen object-cover`

  return (
    <div className="relative">
      <div id="parallax-bg" className="absolute inset-0 z-1"></div>
      <picture className={`${classes} z-background`} style={{height}}>
        <source
          className={classes}
          srcSet={require('../images/liberty-portrait.jpg')}
          media="(max-width: 600px)"
          style={{height}}
        />
        <img className={classes} src={require('../images/liberty.jpg')} style={{height}} />
      </picture>
    </div>
  )
}

export const PageHeader = ({text}) => {
  return (
    <div className="absolute inset-x-0" style={{top: 200}}>
      <div className="container mx-auto text-white text-4xl text-center font-bold text-shadow-subtle">
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export const HeaderBottomBorder = () => <div className="h-2 w-screen bg-green-700"></div>

export const PageSection = ({id, left, right}) => {
  return (
    <div
      id={id}
      className="container mx-auto sm:py-24 py-12 flex flex-col sm:flex-row items-center"
    >
      <div className="sm:w-1/2 px-4 lg:px-8 mb-8">{left}</div>
      <div className="sm:w-1/2 px-4 lg:px-8">{right}</div>
    </div>
  )
}

export const ImageCard = ({image, title, text}) => {
  const imageClasses = `w-24 h-24 object-cover rounded flex-shrink-0 flex-grow-0`

  return (
    <div className="bg-white rounded p-6 w-full flex flex-row items-center overflow-hidden mb-8">
      {typeof image === 'string' ? (
        <img className={imageClasses} src={image} />
      ) : (
        <Img className={imageClasses} fluid={image} />
      )}
      <div className="ml-4">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm overflow-hidden" style={{maxHeight: '4rem'}}>
          {text}
        </p>
      </div>
    </div>
  )
}

if (typeof window !== 'undefined') {
  if (!window.installedParallax) {
    window.installedParallax = true

    document.addEventListener(
      'scroll',
      () => {
        const element = document.getElementById('parallax-bg')
        if (!element) return
        element.style.backgroundPositionY = `-${(3 * window.pageYOffset) / 4}px`
      },
      {passive: true},
    )
  }
}
