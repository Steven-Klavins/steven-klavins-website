import React from 'react'
import '../Contact/Contact.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

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
          {/*import ContactForm from '../../Components/ContactForm/ContactForm' <ContactForm />*/}
        </motion.div>
      </AnimatePresence>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default Contact
