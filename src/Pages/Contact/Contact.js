import React from 'react'
import '../Contact/Contact.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import gmailLogo from '../../images/gmail-logo.png'
import messageLogo from '../../images/messagebubble-logo.png'

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
          <h2>Please feel free to message me!</h2>
          <p className="contactbox">
            <span className="email">stevenklavins94@gmail.com</span>
            <br></br>
            The best way to contact me is via email, I will reply as promptly as
            possible. Alternatively, you can contact me on any of the social
            media platforms listed to the left, click on the links provided and
            you will be directed to the relevant profiles.
          </p>
          <img className="mailLogo" src={gmailLogo} alt="Mail Logo"></img>
          <div className="message">
            <span>Steve: </span>
            <span>Lets talk!</span>
          </div>

          <img
            className="messageLogo"
            src={messageLogo}
            alt="Message Bubble"
          ></img>
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
    </div>
  )
}

export default Contact
