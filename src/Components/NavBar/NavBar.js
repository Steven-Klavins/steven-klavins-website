import React from 'react'
import '../NavBar/NavBar.css'
import Background from '../Background/Background'
import { Icon } from '../Icon/Icon'
import codewarsLogo from '../../images/codewars-logo.png'
import twitterLogo from '../../images/twitter-logo.png'
import linkedinLogo from '../../images/linkedin-logo.png'
import githublogo from '../../images/github-logo.png'
import mediumlogo from '../../images/medium-logo.png'

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
        <div>
          <Icon
            link={'https://github.com/Steven-Klavins'}
            image={githublogo}
            description={'Github Logo'}
            title={'Github'}
          ></Icon>
        </div>
        <div>
          <Icon
            link={'https://www.linkedin.com/in/steven-klavins-90b02a199/'}
            image={linkedinLogo}
            description={'Linkedin logo'}
            title={'Linkedin'}
          ></Icon>
        </div>

        <div>
          <Icon
            link={'https://medium.com/@stevenklavins94'}
            image={mediumlogo}
            description={'Medium Logo'}
            title={'Medium'}
          ></Icon>
        </div>

        <div>
          <Icon
            link={'https://www.codewars.com/users/Steven-Klavins'}
            image={codewarsLogo}
            description={'Code Wars Logo'}
            title={'Codewars'}
          ></Icon>
        </div>

        <div>
          <Icon
            link={'https://twitter.com/KlavinsSteven'}
            image={twitterLogo}
            description={'Twitter Logo'}
            title={'Twitter'}
          ></Icon>
        </div>
      </div>
      <div>
        <Background />
      </div>
    </div>
  )
}

export default navbar
