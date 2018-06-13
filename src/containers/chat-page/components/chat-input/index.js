import React, { Component } from 'react';
import { socket } from '../../../../index.js';
import { connect } from 'react-redux';
import {store} from '../../../../redux/store';


class ChatInput extends Component {

handleSubmit = (e) =>{
  e.preventDefault();
  if(this.refs.messageInput.value ===''){
    return;
  }else{
		this.props.newMessage(this.refs.messageInput.value.trim());
		this.refs.messageInput.value = '';
  }
}


handleСhange = (e) =>{
  this.props.isTyping(this.props.messages);
}

  render() {

    return (
      <div style={{display:"flex",justifyContent:'center'}}>
        <form onSubmit={this.handleSubmit}>
          <input id="typ" onChange={(e)=>this.handleСhange(e)} type="text" ref="messageInput"/>
          <button >Send</button>
        </form>
      </div>
    );
  }

}


function mapStateToProps(state){
  return{
    messages:state.messages
  }
}

export default  connect(mapStateToProps)(ChatInput);
