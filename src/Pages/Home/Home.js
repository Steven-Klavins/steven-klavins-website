import React, { Component } from 'react'
import '../Home/Home.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import queryString from 'query-string'
import computerLogo from '../../images/computer-logo.png'

const transition = {
  color: {
    duration: 0,
    ease: 'easeOut',
    repeatDelay: 0.6,
    yoyo: Infinity,
  },
}

class Home extends Component {
  render() {
    const value = queryString.parse(this.props.location.search)
    const name = value.name
    return (
      <div className="fixed">
        <AnimatePresence onExitComplete>
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>
              <h1 className="nameTitle">Steven Klavins</h1>
              <div>
                <h2>Welcome {name} </h2>
                <p className="welcomDescription">
                  Thank you so much for visiting my website! I'm a full-stack
                  developer,{' '}
                  <a
                    className="midtextlink"
                    href="https://makers.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Makers academy
                  </a>{' '}
                  graduate, and tech addict. I'm London based however I'm an
                  experienced remote worker and have the flexibility to
                  relocate/travel if need be.
                  <br></br>
                  <br></br>I hold a BA in Digital Arts, perform in a{' '}
                  <a
                    className="midtextlink"
                    href="https://www.facebook.com/outofcontextmusic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    band
                  </a>
                  , and have a love of all things creative, you can find my
                  showreel{' '}
                  <a
                    className="midtextlink"
                    href="https://www.youtube.com/watch?v=oNoBRIztcew"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  . If your looking for someone with a yearning to make the
                  world a better place through innovative tech I'm your guy! To
                  be frank, its what gets me out of bed in the morning.  
                  <br />
                  <br />
                  Want to chat? Feel free to contact me on any of the listed
                  platforms!
                </p>
                <div className="welcomemsg">
                  <span className="computertext2">
                    Hello and welcome{' '}
                    <span className="computertext1">{name}</span>,<br></br>
                    please feel free to take a look around! :){' '}
                    <motion.span
                      animate={{ color: ['#66fcf1', '#000000'] }}
                      transition={transition}
                    >
                      |
                    </motion.span>
                  </span>
                </div>
                <img
                  className="computer"
                  src={computerLogo}
                  alt="Computer Logo"
                ></img>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    )
  }
}

export default Home
