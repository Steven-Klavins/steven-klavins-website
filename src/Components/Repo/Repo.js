import React from 'react'
import '../Repo/Repo.css'
import gitHubIcon from '../../images/github-logo.png'

export class Repo extends React.Component {
  render() {
    return (
      <div className="repBox">
        <span className="repoTitle">{this.props.name}</span>
        <div className="gitHubIcon">
          <img className="gitHubIcon" src={gitHubIcon} alt="GitHub Icon"></img>
          <a className="ghLink" href={this.props.link} target="_blank">
            Link
          </a>
        </div>
        <span className="pn">{this.props.description}</span>
        <br></br>
        <span className="pn">
          Last updated: {this.props.update.slice(0, 10)}{' '}
          {this.props.update.slice(11, 16)}
        </span>
        <span className="pn">Language: {this.props.language}</span>
      </div>
    )
  }
}
export default Repo
