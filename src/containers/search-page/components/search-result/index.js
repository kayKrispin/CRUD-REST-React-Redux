import React, { Component } from 'react';

class SearchResult extends Component {

  render() {
    const { img } = this.props;
console.log(img)

    return (
      <div className='row'><div className='cold-md-3'><img src={ img } alt=""/></div></div>
    );
  }

}
export default SearchResult;
