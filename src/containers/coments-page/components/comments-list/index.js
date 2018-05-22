import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchComments } from '../../../../actions/comments'
import Comment from '../comments'

class CommentsList extends Component {


componentDidMount () {
  this.props.fetchComments(this.props.id);
}

render() {
  const { comments } =this.props
    return (
      <div>
      <h1>Post Comments:</h1>
      <ul >
        {comments  ? (
            comments.map((comment, i) => {
              console.log('comment', comment);
              return <Comment key={i} comment={comment} />;
            })
          ) : <h2>Loading...</h2>}
          </ul>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    comments:state.commentsList.comments
  }
}

export default connect( mapStateToProps, { fetchComments } )( CommentsList );
