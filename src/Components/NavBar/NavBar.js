import React from 'react'
import '../NavBar/NavBar.css'
import Background from '../Background/Background'

const navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a class="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">Projects</a>
        </li>
        <li>
          <a href="#about">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <div>
        <Background />
      </div>
    </div>
  )
}

export default navbar
