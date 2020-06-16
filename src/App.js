import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <AnimatePresence>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/skills">
                <Skills />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </AnimatePresence>
        </div>
      </Router>
    </div>
  )
}
