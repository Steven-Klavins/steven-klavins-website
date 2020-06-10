import React from 'react'
import '../NavBar/NavBar.css'
import Background from '../Background/Background'
import codewarsLogo from '../../images/codewars-logo.png'
import twitterLogo from '../../images/twitter-logo.png'

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
      <div className="logobox">
        <a
          className="logos"
          href="https://www.codewars.com/users/Steven-Klavins"
          target="_blank"
        >
          <img className="logos" src={codewarsLogo} alt="Code Wars Logo" />
          Code Wars
        </a>

        <a
          className="logos"
          href="https://twitter.com/KlavinsSteven"
          target="_blank"
        >
          <img className="logos" src={twitterLogo} alt="Twitter Logo" />
          Twitter
        </a>
      </div>
      <div>
        <Background />
      </div>
    </div>
  )
}

export default navbar
