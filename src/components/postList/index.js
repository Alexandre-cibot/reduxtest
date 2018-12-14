import React from 'react';
import axios from 'axios';
import './index.css';
import { POST_API } from '../../globals.js';

class PostList extends React.Component {
  
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  
  componentWillMount() {
    axios.get(POST_API)
    .then(res => this.setState({posts: res.data}));
  }
  
  render() {
    const postItems = this.state.posts.map( item => (
      <div className="post-item" key={item.id}>
        <h4>{item.title}</h4>
        <p>{item.body}</p>
      </div>
    ));
    
    return (
      <div>
        <h1>FormPost</h1>
        { postItems }
      </div>
    );
  }
}

export default PostList;