import React from 'react'
import axios from 'axios';

import { POST_API } from '../../globals.js'

class FormPost extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      isSendingBtnDisabled: false
    }
  }
  
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  sendPost() {
    // Disable send Button during sending.
    this.setState({isSendingBtnDisabled: true})
    axios.post(POST_API, {
      title: this.state.title,
      body: this.state.body
    })
    .then(res => {
      this.setState({
        isSendingBtnDisabled: false,
        title: '',
        body: ''
      })
      if (res.status !== 201) {
        console.warn('Erreur d\'envoie')
      } else {
        console.log('Post bien envoyé !')
      }
    })
    .catch(e => {
      console.error(e)
      this.setState({isSendingBtnDisabled: false})
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { title, body } = this.state
    if (title && body) {
      this.sendPost()
    }
    
  }
  
  render() {
    return (
      <div>
        <h1>FormPost</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Titre</label> <br/>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>  
          </div>
          <br/>
          <div>
            <label htmlFor="body">Texte</label><br/>
            <input type="text" name="body" value={this.state.body} onChange={this.handleInputChange}/>
          </div>
          <br/>
          <button type="submit" disabled={this.state.isSendingBtnDisabled}>Envoyer</button>
        </form>        
      </div>
    )
  }
}

export default FormPost