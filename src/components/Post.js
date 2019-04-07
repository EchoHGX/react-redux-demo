import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPost } from '../actions/postActions';

class Post extends Component {
  componentDidMount() {
    //触发action操作
    this.props.fetchPost();
  }

  render() {
    const postItems = this.props.posts.map(post => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}

Post.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPost })(Post);