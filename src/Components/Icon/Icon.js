import React from 'react'
import '../Icon/Icon.css'

export class Icon extends React.Component {
  render() {
    return (
      <a
        className="navIcons"
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="navIcons"
          src={this.props.image}
          alt={this.props.description}
        />
        {this.props.title}
      </a>
    )
  }
}
