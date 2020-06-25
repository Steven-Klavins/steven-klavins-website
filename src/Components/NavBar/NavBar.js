import React from 'react'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import Background from '../Background/Background'
import { Icon } from '../Icon/Icon'
import codewarsLogo from '../../images/codewars-logo.png'
import twitterLogo from '../../images/twitter-logo.png'
import linkedinLogo from '../../images/linkedin-logo.png'
import githublogo from '../../images/github-logo.png'
import mediumlogo from '../../images/medium-logo.png'
import cvlogo from '../../images/cv-logo.png'
import mainlogo from '../../images/main-logo.png'

const navbar = () => {
  return (
    <div>
      <div className="navcontainer">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="linkiconbox">
          <div>
            <Icon
              link={'https://github.com/Steven-Klavins/CV'}
              image={cvlogo}
              description={'CV Logo'}
              title={'CV'}
            ></Icon>
          </div>
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
      </div>
      <div>
        <Background />
      </div>
      <div>
        <img className="mlogo" src={mainlogo} alt="logo" />
      </div>
      <div className="footerNote">
        Built and designed by Steven Klavins 2020
      </div>
    </div>
  )
}

export default navbar
