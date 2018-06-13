import React, { Component } from 'react';
import autoscroll from 'autoscroll-react';
import { connect } from 'react-redux';


class ChatOutput extends Component {

  componentWillUpdate() {
		let node = this.refs.scrollbar;
		this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
	}

	componentDidUpdate() {
		if (this.shouldScrollBottom) {
			let node = this.refs.scrollbar;
			node.scrollTop = node.scrollHeight
		}
	}

  render() {
console.log(this.props.data)
    return (
      <div>
      <div style={{display:'flex',justifyContent:'center' ,  width:'400px', border:'2px solid #fff',margin:'40px auto',padding:'5px'}}>
        <ul  style = {{color:'#fff',display:'flex', alignItems:'bottom', flexDirection:'column',overflowY:'scroll',listStyle:'none',width:'100%',height:'400px',padding:'0'}} ref='scrollbar'>
      	{this.props.messages.length > 0  ? ( this.props.messages.map((message, index) => <li style={{textAlign:'left'}} key={index}><span>{message.time}</span> <strong>{message.name} said</strong> <span>{message.message}</span><br/>
 </li>)) :
      (  <h1></h1>  ) }
       { this.props.typing.name !==undefined ? (<p style={{color:'#fff',alignSelf:'bottom', marginBottom:'auto'}}>{`${this.props.typing.name}  ${this.props.typing.msg} `}</p>):(<p></p>) }
        </ul>

      </div>

</div>

    );
  }

}
function mapStateToProps(state){
  return{
    typing:state.messages,
    data:state.messages.messages
  }
}


export default connect(mapStateToProps)(ChatOutput);
