import React, { Component } from 'react';
import CommentsList from './components/comments-list'

class ComentsPage extends Component {

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <CommentsList id={id} />
      </div>
    );
  }

}

export default ComentsPage;
