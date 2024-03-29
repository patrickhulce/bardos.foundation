import React from 'react'
import Img from 'gatsby-image'

export const ParallaxImage = ({className, height}) => {
  const classes = `${className} w-full object-cover`

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

export const HeaderBottomBorder = () => <div className="h-2 w-full bg-green-700"></div>

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

export const AwardDetails = () => {
  return (
    <PageSection
      left={
        <>
          <h2 className="text-4xl mb-2">Selection Process</h2>
          <ul className="list-disc pl-10 mt-2">
            <li>Feb 1: Applications open</li>
            <li>May 1: Applications close</li>
            <li>May 15: Finalists notified</li>
            <li>June 1: Finalist response deadline</li>
            <li>June 15: Winners announced</li>
          </ul>
          <h2 className="text-4xl mt-4 mb-2">Selection Criteria</h2>
          <p>
            The Foundation does not and shall not discriminate on the basis of race, color,
            religion, gender, gender expression, age, disability, marital status, sexual
            orientation, or military status, in any of its grant decisions or operations. The
            Foundation considers a multitude of factors when making awards including GPA, ACT/SAT
            test scores, family financial situation, community/extracurricular involement,
            candidate's personal statement, and academic course load.
          </p>
        </>
      }
      right={
        <>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl mb-2">Student Award Details</h2>
            <ul className="list-disc pl-10 mt-2">
              <li>$1000 one-time payment</li>
              <li>4 total winners per application cycle</li>
              <li>
                Awards are issued in recognition of past achievements and not restricted to finance
                any particular activities (award winners may use the funds in any manner which they
                see fit).
              </li>
            </ul>

            <a
              target="_blank"
              rel="noopener"
              href="https://docs.google.com/forms/d/1KI_mEhc9HifSRaXUX6J_he5Klk0YHvFeYO99qlZnd8s/viewform"
              className="bg-blue-700 hover:text-blue-300 text-white font-bold py-2 px-4 mt-6 ml-2 rounded cursor-pointer"
              style={{width: 'fit-content'}}
            >
              Apply Now
            </a>
          </div>
        </>
      }
    />
  )
}

export const ImageCard = ({image, title, text, link}) => {
  const imageClasses = `w-24 h-24 object-cover rounded flex-shrink-0 flex-grow-0`

  return (
    <div className="bg-white rounded p-6 w-full flex flex-row items-center overflow-hidden mb-8">
      {typeof image === 'string' ? (
        <img className={imageClasses} src={image} />
      ) : (
        <Img className={imageClasses} fluid={image} />
      )}
      <div className="ml-4">
        <h3 className="text-xl">{link ? <a href={link}>{title}</a> : title}</h3>
        <p className="text-sm overflow-hidden">{text}</p>
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
