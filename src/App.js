import React, { Component } from 'react';
import './App.css';
import FormPost from './components/formPost'
import PostList from './components/postList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            React
          </p>
        </header>
        <section>
          <FormPost />
        </section>
        <hr />
        <section>
          <PostList />
        </section>
      </div>
    );
  }
}

export default App;
