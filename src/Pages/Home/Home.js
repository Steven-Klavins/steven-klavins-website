import React from 'react'
import '../Home/Home.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Home = (isVisible) => {
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
              <h2>Welcome</h2>
              <p>
                Welcome and thank you for visiting my website! I'm a full-stack
                developer, Makers Academy graduate, and tech addict. I'm London
                based however I'm an experienced remote worker and have the
                flexibility to relocate/travel.<br></br>
                <br></br>I hold a BA in Digital Arts, perform in a band, and
                have a love of all things creative. I yearn to make the world a
                better place through innovative tech, to be frank, its what gets
                me out of bed in the morning.  
                <br />
                <br />
                Want to chat? Feel free to contact me on any of the listed
                platforms!
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default Home
