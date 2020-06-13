import React from 'react'
import '../Languages/Languages.css'
import { render } from '@testing-library/react'

export class Languages extends React.Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img className="logo" src={this.props.image} />
          <span className="fontplace">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default Languages
