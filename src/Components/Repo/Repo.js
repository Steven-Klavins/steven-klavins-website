import React from 'react'
import '../Repo/Repo.css'

export class Repo extends React.Component {
  render() {
    return (
      <div className="repBox">
        <span className="pn">{this.props.name}</span>
        <span className="pn">{this.props.description}</span>
        <span className="pn">
          Last updated: {this.props.update.slice(0, 10)}{' '}
          {this.props.update.slice(11, 16)}
        </span>
        <a href={this.props.link} target="_blank">
          Link
        </a>
      </div>
    )
  }
}
export default Repo
