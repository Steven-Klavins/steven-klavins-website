import React from 'react'
import '../Contact/Contact.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import gmailLogo from '../../images/gmail-logo.png'

const container = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const circlesAnimation = {
  start: {
    y: '0%',
  },
  end: {
    y: '100%',
  },
}

const bounce = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
}

const Contact = () => {
  return (
    <div>
      <AnimatePresence onExitComplete>
        <motion.div
          key="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="nameTitle">Contact</h1>
          <p>
            stevenklavins@gmail94.com <br></br>
            The best way to contact me is via email or any of my social
          </p>
          <img className="mailLogo" src={gmailLogo} alt="Mail Logo"></img>
          {/*import ContactForm from '../../Components/ContactForm/ContactForm' <ContactForm />*/}
          <div className="animatePosition">
            <motion.div
              className="bounce"
              variants={container}
              initial="start"
              animate="end"
            >
              <motion.span
                className="circle"
                variants={circlesAnimation}
                transition={bounce}
              />
              <motion.span
                className="circle"
                variants={circlesAnimation}
                transition={bounce}
              />
              <motion.span
                className="circle"
                variants={circlesAnimation}
                transition={bounce}
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default Contact
