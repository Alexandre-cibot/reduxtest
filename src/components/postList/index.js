import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '@/redux/actions/postActions';

import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '@/components/postList/index.css';

class PostList extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  
  render() {     
    return (
      <div>
        <h1>Liste de posts</h1>
          <Card.Group>
            {this.props.posts.map( item => (
              <Card 
                key={item.id}
                header={item.title}
                meta={item.id}
                description={item.body} />
            ))}
          </Card.Group>
      </div>
    );
  }
}

PostList.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(PostList);