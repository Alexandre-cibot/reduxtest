import React, { Component } from 'react';
import '@/App.css';
import { Provider } from 'react-redux';
import store from '@/store';
import FormPost from '@/components/formPost';
import PostList from '@/components/postList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>React</p>
          </header>
          <section>
            <FormPost />
          </section>
          <hr />
          <section>
            <PostList />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
