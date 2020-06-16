import React from 'react'
import '../About/About.css'
import aboutPhoto from '../../images/about-photo.jpg'

function About() {
  return (
    <div>
      <h1 className="nameTitle">About</h1>
      <div className="aboutTextbox">
        <p className="aboutTextbox">Hello and thankyou for visiting my site!</p>
      </div>
      <img className="aboutimg" src={aboutPhoto}></img>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default About
