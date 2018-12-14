import React from 'react';
import axios from 'axios';

import { Form, Button } from 'semantic-ui-react';

import { POST_API } from '@/globals.js';

class FormPost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      message: '',
      email: 'test@test.com',
      isSendingBtnDisabled: false
    };
  }
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  sendPost() {
    // Disable send Button during sending.
    this.setState({isSendingBtnDisabled: true});
    axios.post(POST_API, {
      title: this.state.title.trim(),
      message: this.state.message.trim(),
      email: this.state.email.trim()
    })
    .then(res => {
      this.setState({
        isSendingBtnDisabled: false,
        title: '',
        message: '',
        email: ''
      });
      if (res.status !== 201) {
        console.warn('Erreur d\'envoie');
      } else {
        console.log('Post bien envoyé !');
      }
    })
    .catch(e => {
      console.error(e);
      this.setState({isSendingBtnDisabled: false});
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, message, email } = this.state;
    const hasTitle = !!title.trim();
    const hasMessage = !!message.trim();
    const hasEmail = !!email.trim();
    if (hasTitle && hasMessage && hasEmail) {
      this.sendPost();
    }
    
  }
  
  render() {
    return (
      <div>
        <h1>FormPost</h1>
        <Form action="" onSubmit={this.handleSubmit}>
          <Form.Group widths='12'>
            <Form.Input label="Title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />  
            <Form.Input label="Message" type="text" name="message" value={this.state.message} onChange={this.handleInputChange} />
            <Form.Input label="Email" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </Form.Group>
          <Button type="submit" disabled={this.state.isSendingBtnDisabled}>Envoyer</Button>
        </Form> 
      </div>
    );
  }
}

export default FormPost;