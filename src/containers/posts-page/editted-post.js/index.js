import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
        <div>
        <label htmlFor="">Congratulations,you have succesfully editted previous post number : {this.props.id}</label><br/>
          <strong>{this.props.post}</strong>
        </div>
    );
  }
}

export default Post;
