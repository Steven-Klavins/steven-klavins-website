import React from 'react'
import '../Form/Form.css'
import axios from 'axios'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      diabled: false,
      emailSent: null,
    }
  }
  render() {
    return <div></div>
  }
}

export default Form
