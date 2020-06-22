import React from 'react'
import { motion } from 'framer-motion'
import '../Skills/Skills.css'
import Languages from '../../Components/Languages/Languages'
import rubyLogo from '../../../src/images/ruby-logo.png'
import javaLogo from '../../../src/images/java-logo.png'
import javascriptLogo from '../../../src/images/javascript-logo.png'
import pythonLogo from '../../../src/images/python-logo.png'
import reactLogo from './../../images/react-logo.png'
import nodeLogo from './../../images/node-logo.png'
import railsLogo from './../../images/rails-logo.png'
import rspecLogo from './../../images/rspec-logo.png'
import vsCodeLogo from './../../images/vscode-logo.png'
import jasmineLogo from './../../images/jasmine-logo.png'
import slackLogo from './../../images/slack-logo.png'
import miroLogo from './../../images/miro-logo.png'
import postgresqlLogo from '../../images/postgresql-logo.png'
import mongoLogo from '../../images/mongodb-logo.png'

const Skills = () => {
  return (
    <div>
      <motion.div
        exit={{ opasity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <h1 className="nameTitle">Skills</h1>
        <h2>Languages, Tools & Frameworks</h2>
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
          <div>
            <Languages image={jasmineLogo} name="Jasmine"></Languages>
          </div>
          <div>
            <Languages image={mongoLogo} name="Mongo DB"></Languages>
          </div>
          <div>
            <Languages image={miroLogo} name="Miro"></Languages>
          </div>
        </div>

        <div className="frameworksblock">
          <div>
            <Languages image={reactLogo} name="React"></Languages>
          </div>
          <div>
            <Languages image={nodeLogo} name="Nodejs"></Languages>
          </div>
          <div>
            <Languages image={railsLogo} name="Ruby On Rails"></Languages>
          </div>
          <div>
            <Languages image={rspecLogo} name="RSpec"></Languages>
          </div>
          <div>
            <Languages image={vsCodeLogo} name="VS Code"></Languages>
          </div>
          <div>
            <Languages image={postgresqlLogo} name="PostgreSQL"></Languages>
          </div>
          <div>
            <Languages image={slackLogo} name="Slack"></Languages>
          </div>
        </div>
      </motion.div>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
      <div className="skillTextBox">
        <p>I have a number of skills</p>
      </div>
    </div>
  )
}

export default Skills
