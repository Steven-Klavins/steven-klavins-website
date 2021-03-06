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
          <h2>GitHub Repositories</h2>
          <p className="projectssubheading">
            Here you'll find the repo's of my most notable projects, please feel
            free to take a look!
          </p>
          <div className="projectsTable">
            <ApiData />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Projects
