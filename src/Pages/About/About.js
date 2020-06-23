import React from 'react'
import '../About/About.css'
import aboutPhoto from '../../images/about-photo.jpg'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
function About() {
  return (
    <div>
      <AnimatePresence onExitComplete>
        <motion.div
          key="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="nameTitle">About</h1>
          <div className="aboutTextbox">
            <p className="aboutTextbox">
              Hello and thankyou for visiting my site!
            </p>
          </div>
          <img className="aboutimg" src={aboutPhoto} alt="About"></img>
        </motion.div>
      </AnimatePresence>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default About
