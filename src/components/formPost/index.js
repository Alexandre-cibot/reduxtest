import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '@/redux/actions/postActions';

import { Form, Button } from 'semantic-ui-react';

class FormPost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      message: '',
      isSendingBtnDisabled: false
    };
  }
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  clearForm = () => {
    this.setState({
      isSendingBtnDisabled: false,
      title: '',
      message: '',
    });
  }
  
  sendPost(data) {
    // Disable send Button during sending.
    this.setState({isSendingBtnDisabled: true});
    this.props.createPost(data, this.clearForm);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title.trim();
    const message = this.state.message.trim();
    if (title && message ) {
      this.sendPost({title, body: message});
    }
  }
  
  render() {
    return (
      <div>
        <h1>Ajoute ton post</h1>
        <Form action="" onSubmit={this.handleSubmit}>
          <Form.Group widths='12'>
            <Form.Input autoFocus label="Title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />  
            <Form.Input label="Message" type="text" name="message" value={this.state.message} onChange={this.handleInputChange} />
          </Form.Group>
          <Button 
            type="submit"
            disabled={this.state.isSendingBtnDisabled}
            loading={this.state.isSendingBtnDisabled}>
            Envoyer</Button>
        </Form> 
      </div>
    );
  }
}

FormPost.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(FormPost);