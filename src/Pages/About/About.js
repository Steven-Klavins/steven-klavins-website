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
          <div>
            <h1 className="nameTitle">About</h1>
            <h2>A bit about who I am</h2>
            <div className="aboutTextbox">
              <p className="aboutTextbox">
                Thank you so much for taking the time out of your day to find
                out a little more about me. My name is Steven (most call me
                Steve) and I'm presently based in London (UK). I'm 26 years old,
                a lover of everything tech, music, and art. <br></br>
              </p>
            </div>
            <img className="aboutimg" src={aboutPhoto} alt="About"></img>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default About
