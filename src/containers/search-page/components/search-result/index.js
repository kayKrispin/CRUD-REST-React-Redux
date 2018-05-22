import React, { Component } from 'react';

class SearchResult extends Component {

  render() {
    const { img } = this.props;
console.log(img)

    return (
      <img src={ img } alt=""/>
    );
  }

}
export default SearchResult;
