import React from 'react'
import '../Projects/Projects.css'
import { motion } from 'framer-motion'
import ApiData from '../../Components/ApiData/ApiData'
import { AnimatePresence } from 'framer-motion'

const Projects = () => {
  return (
    <div>
      <AnimatePresence onExitComplete>
        <motion.div
          key="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="nameTitle">Projects</h1>
          <h2>GitHub Repos</h2>
          <p>
            Here you'll find the repos of my most notable projects, feel free to
            take a look around!
          </p>
          <div className="projectsTable">
            <ApiData />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default Projects
