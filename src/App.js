import React, { Component } from 'react';
import '@/App.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';

import { Divider } from 'semantic-ui-react';
import FormPost from '@/components/formPost';
import PostList from '@/components/postList';

import 'semantic-ui-css/semantic.min.css';

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
          <section>
            <Divider />
          </section>
          <section>
            <PostList />
          </section>
        </div>
      </Provider>
    );
  }
}

export default App;
