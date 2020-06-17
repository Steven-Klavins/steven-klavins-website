import React from 'react'
import '../Icon/Icon.css'

export class Icon extends React.Component {
  render() {
    return (
      <a className="logos" href={this.props.link} target="_blank">
        <img
          className="logos"
          src={this.props.image}
          alt={this.props.description}
        />
        {this.props.title}
      </a>
    )
  }
}
