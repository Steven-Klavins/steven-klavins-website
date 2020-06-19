import React from 'react'
import '../Projects/Projects.css'
import { motion } from 'framer-motion'
import ApiData from '../../Components/ApiData/ApiData'

const Projects = () => {
  return (
    <div>
      <motion.div
        exit={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <h1 className="nameTitle">Projects</h1>
        <div className="projectsTable">
          <ApiData />
        </div>
      </motion.div>

      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default Projects
