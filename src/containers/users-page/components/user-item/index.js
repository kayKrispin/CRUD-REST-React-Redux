import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class UserItem extends Component {



  render() {
const div = { marginTop:'20px' }
const li = { font:' 200 20px/1.5 Helvetica, Verdana, sans-serif',
borderBottom:'3px solid #ccc',borderRadius:'10px',margin:'15px',textAlign:'center' }
const a ={}

const { id, email, name, phone, username } = this.props.user;
    return (
  <div style={div} className='col-md-6'>
    <li key={id} style={li}>
      <h2 ><Link style={{color:'#99a8a7'}} to={`/posts/${id}`} >{name}</Link></h2>

    </li>
 </div>
    );
  }
}

export default UserItem;
