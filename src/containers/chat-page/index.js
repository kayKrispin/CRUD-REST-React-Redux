import React, { Component } from 'react';
import ChatInput from './components/chat-input';
import ChatOutput from './components/chat-output';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChattApps from '../../actions/chat'
import autoscroll from 'autoscroll-react'


class ChatApp extends Component {

  render() {
    const {fetchMoreItems} = this.props;
    return (
      <div>
          <ChatOutput /* add props to be intercepted by autoscroll */
            onScrolled={e => console.log('the list was scrolled')} messages = {this.props.messages} />
          <ChatInput {...bindActionCreators(ChattApps, this.props.dispatch)} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    messages:state.messages,
  
  }
}

export default  connect(mapStateToProps)(ChatApp);
