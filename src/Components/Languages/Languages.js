import React from 'react'
import '../Languages/Languages.css'

export class Languages extends React.Component {
  render() {
    return (
      <div>
        <div className="languagelogo">
          <img className="languagelogo" src={this.props.image} alt="logo" />
          <span className="languagelogofont">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default Languages
