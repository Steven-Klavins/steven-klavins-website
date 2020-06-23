import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'
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
          <AnimatePresence onExitComplete>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/projects" component={Projects}></Route>
              <Route exact path="/skills" component={Skills}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/about" component={About}></Route>
            </Switch>
          </AnimatePresence>
        </div>
      </Router>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
