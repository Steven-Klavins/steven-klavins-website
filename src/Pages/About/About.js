import React from 'react'
import '../About/About.css'
import aboutPhoto from '../../images/about-photo.jpg'
import { motion } from 'framer-motion'

function About() {
  return (
    <div>
      <motion.div
        exit={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <h1 className="nameTitle">About</h1>
        <div className="aboutTextbox">
          <p className="aboutTextbox">
            Hello and thankyou for visiting my site!
          </p>
        </div>
        <img className="aboutimg" src={aboutPhoto} alt="About"></img>
      </motion.div>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default About
