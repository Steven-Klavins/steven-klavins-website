import React from 'react'
import { motion } from 'framer-motion'
import '../Skills/Skills.css'
import Languages from '../../Components/Languages/Languages'
import rubyLogo from '../../../src/images/ruby-logo.png'
import javaLogo from '../../../src/images/java-logo.png'
import javascriptLogo from '../../../src/images/javascript-logo.png'
import pythonLogo from '../../../src/images/python-logo.png'

const Skills = () => {
  return (
    <div>
      <motion.div
        exit={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <h1 className="nameTitle">Skills</h1>
        <h2>Languages</h2>
        <div className="languagesblock">
          <div>
            <Languages image={javaLogo} name="Java"></Languages>
          </div>
          <div>
            <Languages image={javascriptLogo} name="Javascript"></Languages>
          </div>
          <div>
            <Languages image={rubyLogo} name="Ruby"></Languages>
          </div>
          <div>
            <Languages image={pythonLogo} name="Python"></Languages>
          </div>
        </div>
        <div className="footerNote">
          Built and designed by Steven Klavins 2020
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
