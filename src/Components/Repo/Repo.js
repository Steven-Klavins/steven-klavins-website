import React from 'react'
import '../Repo/Repo.css'

export class Repo extends React.Component {
  render() {
    return (
      <div className="repBox">
        <span className="pn">{this.props.name}</span>
        <a href={this.props.link} target="_blank">
          Link
        </a>
      </div>
    )
  }
}
export default Repo
