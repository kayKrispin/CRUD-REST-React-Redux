import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';

class Comment extends Component {

  render() {
    const { comment } = this.props;
    return (
      <div>
        <h3>Name : {comment.name}</h3>
        <li onClick={this.handleClick}><strong>Content </strong> : {comment.body}<br/><input type='text'placeholder="edit" /></li>
      </div>
    );
  }

}

export default Comment;
