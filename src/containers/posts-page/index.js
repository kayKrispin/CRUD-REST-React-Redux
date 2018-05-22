import React, { Component } from 'react';
import Post from './post';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/posts';
import PostForm from './posts-form';
import PostList from './post-list'
import { postChosen } from '../../actions/posts';


class PostsPage extends Component {

state={
  checked:false
}

handleChange = () =>{
  this.props.postChosen()
  this.setState(prevState=>({
    checked:!prevState.checked
  }))
}

render () {
const { id } = this.props.match.params;

  return (
      <div>
        <button onClick={this.handleChange} >Create New Post</button>
        {this.state.checked ? (<PostForm />):null}
        <PostList id={id} />
      </div>
    );
  }
}


export default connect( null, { postChosen })(PostsPage);
