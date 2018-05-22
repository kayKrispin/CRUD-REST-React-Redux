import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class UserItem extends Component {



  render() {
const div = { width:"200px",display:'table',margin:'0 auto' }
const li = { font:' 200 20px/1.5 Helvetica, Verdana, sans-serif',
borderBottom:'3px solid #ccc',backgroundColor:'yellow',borderRadius:'5px',margin:'15px',textAlign:'center',display:'table-cell' }
const a ={width:'200px',color:'#000',display:'block'}

const { id, email, name, phone, username } = this.props.user;
    return (
  <div style={div}>

    <li key={id} style={li}>
      <h3><Link to={`/posts/${id}`} >{name}</Link></h3>
      <strong>{username}</strong>, phone: <strong> {phone} </strong>
    </li>
 </div>
    );
  }
}

export default UserItem;
