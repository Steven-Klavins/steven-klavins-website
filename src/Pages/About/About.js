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

            <p className="aboutTextbox">
              Thank you so much for taking the time out of your day to find out
              a little more about me. My name is Steven (most call me Steve) and
              I'm presently based in London (UK). I'm 26 years old, a lover of
              everything tech, music, and art.<br></br> <br></br>In late 2019 I
              left the stability of my job in pursuit of doing something more
              meaningful with my life. Following my resignation, I taught myself
              OOP principles, attended{' '}
              <a
                className="midtextlink"
                href="https://makers.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Makers academy
              </a>
              , and immersed myself in learning. I'm a musician and play guitar
              in my band{' '}
              <a
                className="midtextlink"
                href="https://www.facebook.com/outofcontextmusic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Out Of Context
              </a>
              , I love old school horror movies and animation. <br></br>
              <br></br>I'm not a huge sports fan but I love swimming and was a
              voluntary swimming teacher a few years ago. I suppose you could
              say I'm a quirky individual, I embrace alternative culture. I love
              gothic fashion and Prog Metal, but hey, the world would be a
              boring place if we were all the same right?
            </p>

            <img className="aboutimg" src={aboutPhoto} alt="About"></img>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default About
