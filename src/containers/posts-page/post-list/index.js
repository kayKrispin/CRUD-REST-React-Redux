import React, { Component } from 'react';
import Post from '../post';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../actions/posts';
import PostForm from '../posts-form';

class PostList extends Component {

componentDidMount(){
  this.props.fetchPosts(this.props.id)
}

componentWillReceiveProps(nextProps){
  if( nextProps.posts.length>10 ){
      alert('Nice mah')
  }
}

  render () {
const { posts } = this.props;
const { id } = this.props;

    return (
      <div>
      <h1 style={{textAlign:'center',color:'#fff',marginLeft:'30px'}}>Users Posts</h1>
      <ul >
        {posts  ? (
            posts.map((post, i) => {
              return <Post key={i} post={post} />;
            })
          ) : <h2>Loading...</h2>}
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts:state.postsList.posts,
    newPost:state.postsList.newPost
  }
}
export default connect(mapStateToProps,{ fetchPosts })(PostList);
