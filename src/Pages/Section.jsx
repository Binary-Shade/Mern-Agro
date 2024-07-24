import React from 'react'
import './scrollAnimation.css'

const Section = ({heroRef}) => {
  return (
    <div className="content">
        <section className="section hero h-screen" ref={heroRef}>

        </section>
      </div>
  )
}

export default Section