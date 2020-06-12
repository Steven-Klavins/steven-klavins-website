import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
          <Home />
        </div>
      </div>
    )
  }
}

export default App
