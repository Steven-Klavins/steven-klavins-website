import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Pages/Home/Home'
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
