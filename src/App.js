import React from 'react'
import Particles from 'react-particles-js'
import NavBar from './Components/NavBar/NavBar'
import Background from './Components/Background/Background'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <h1 className="nameTitle">Steven Klavins</h1>
        <div className="footerNote">
          Built and designed by Steven Klavins 2020
        </div>
      </div>
    )
  }
}

export default App
