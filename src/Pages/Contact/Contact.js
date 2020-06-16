import React from 'react'
import '../Contact/Contact.css'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
      <motion.div
        exit={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <h1 className="nameTitle">Contact</h1>
        <div className="footerNote">
          Built and designed by Steven Klavins 2020
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
