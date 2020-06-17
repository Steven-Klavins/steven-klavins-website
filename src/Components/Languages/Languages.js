import React from 'react'
import '../Languages/Languages.css'

export class Languages extends React.Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img className="logo" src={this.props.image} alt="logo" />
          <span className="fontplace">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default Languages
