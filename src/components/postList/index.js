import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '@/redux/actions/postActions';

import { Card, Button } from 'semantic-ui-react';

import '@/components/postList/index.css';

class PostList extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    const postItems = posts.map( item => (
      <Card 
        key={item.id}
        header={item.name}
        meta={item.email}
        description={item.body}
        >
      </Card>
    ));
     
    return (
      <div>
        <h1>FormPost</h1>
          <Card.Group>
            { postItems }
          </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(PostList);