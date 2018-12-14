import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '@/redux/actions/postActions';
import '@/components/postList/index.css';

class PostList extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    const postItems = posts.map( item => (
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

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(PostList);