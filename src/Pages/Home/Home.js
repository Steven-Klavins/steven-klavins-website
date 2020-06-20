import React from 'react'
import '../Home/Home.css'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <motion.div
        exit={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <div>
          <h1 className="nameTitle">Steven Klavins</h1>
          <div>
            <h2>Welcome</h2>
            <p>
              Welcome and thank you for visiting my website! I'm a full-stack
              developer, Makers Academy graduate, and tech addict. I hold a BA
              in Digital Arts, perform in a band, and have a love of all things
              creative. I yearn to make the world a better place through
              innovative tech, to be frank, its what gets me out of the bed in
              morning.  
              <br />
              <br />
              Have any questions at all feel please free to get in touch.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default Home
