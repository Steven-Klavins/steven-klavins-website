import React from 'react'
import '../ContactForm/ContactForm.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import axios from 'axios'

class ContactForm extends React.Component {
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
    return (
      <div className="formBox">
        <Form>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full Name</Form.Label>
            <FormControl
              id="full-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <FormControl
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Full Name</Form.Label>
            <FormControl
              id="message"
              name="message"
              as="textarea"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default ContactForm
