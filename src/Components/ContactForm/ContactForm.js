import React from 'react'
import '../ContactForm/ContactForm.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
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

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      disabled: true,
    })
  }
  render() {
    return (
      <div className="formBox">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Name</Form.Label>
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
            <Form.Label htmlFor="message">Message</Form.Label>
            <FormControl
              id="message"
              name="message"
              as="textarea"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            className="d-inline-block"
            variant="primary"
            type="submit"
            disabled={this.state.disabled}
          >
            Send
          </Button>

          {this.state.emailSent === true && (
            <span className="message">Message sent sucessfully!</span>
          )}

          {this.state.emailSent === false && (
            <span className="message">
              Sorry an error occured sending your message
            </span>
          )}
        </Form>
      </div>
    )
  }
}

export default ContactForm
