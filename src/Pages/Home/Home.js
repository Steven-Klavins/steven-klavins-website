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
              Thank you for visiting my site! My name is Steven (most people
              call me Steve) and I'm a full-stack developer with a yearning to
              grow and learn. I'll just cut to the chase, tech is basically my
              life. The endless growth and potential tech has to make the world
              a better place is what gets me out of bed in the morning.
              <br />
              <br />
              Have any questions at all feel free to get in touch!
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
