import React from 'react'
import '../Repo/Repo.css'
import gitHubIcon from '../../images/github-logo.png'

export class Repo extends React.Component {
  render() {
    return (
      <div className="repocontainer">
        <span className="repoTitle">{this.props.name}</span>
        <div className="gitHubIcon">
          <img className="gitHubIcon" src={gitHubIcon} alt="GitHub Icon"></img>
          <a
            className="githublink"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div>
        <span className="repoinfotext">{this.props.description}</span>
        <br></br>
        <span className="repoinfotext">
          Last updated: {this.props.update.slice(0, 10)}{' '}
          {this.props.update.slice(11, 16)}
        </span>
        <span className="repoinfotext">Language: {this.props.language}</span>
      </div>
    )
  }
}
export default Repo
