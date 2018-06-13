import SearchPage from '../containers/search-page';
import UserPage from '../containers/users-page';
import { BrowserRouter as Router,Switch,Link, Route,NavLink, Redirect } from 'react-router-dom';
import FormsPage from '../containers/forms-page';
import PostsPage from '../containers/posts-page';
import ComentsPage from '../containers/coments-page';
import HomePage from '../containers/home-page';
import ChatPage from '../containers/chat-page';
import ImageCroperPage from '../containers/image-croper-page';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


import React, { Component } from 'react';

class RoutePage extends Component {

  render() {
    return (
      <div>
        <div>
          <ul>
             { this.props.user ?  (<div><li style={{display:'inline-block'}}> <NavLink style={{color:'#fff'}} to='/' exact activeStyle={{color:'orange'}}><h2>Home</h2></NavLink> </li>
          <li style={{display:'inline-block',marginLeft:'20px'}}><NavLink style={{color:'#fff'}} to='/search' activeStyle={{color:'orange'}}><h2>Search</h2></NavLink> </li>
            <li style={{display:'inline-block', marginLeft:'20px'}}>  <NavLink style={{color:'#fff'}} to='/forms' activeStyle={{color:'orange'}}><h2>Forms</h2></NavLink> </li>
            <li style={{display:'inline-block', marginLeft:'20px'}}>  <NavLink style={{color:'#fff'}} to='/users' activeStyle={{color:'orange'}}><h2>User Page</h2></NavLink> </li>
            <li style={{display:'inline-block', marginLeft:'20px'}}>  <NavLink style={{color:'#fff'}} to='/chat' activeStyle={{color:'orange'}}><h2>Chat Page</h2></NavLink> </li>
          </div>):null}
          </ul>

      {this.props.user ? (<div> <Route path='/search' exact component={SearchPage} />
        <Route path='/forms' exact component={FormsPage} />
        <Route location={this.props.location} path='/users' exact component={UserPage} />
        <Route path='/posts/:id' exact component={PostsPage} />
        <Route path='/chat' exact component={ChatPage} />
        <Route path='/posts/comments/:id' exact component={ComentsPage} /> </div>
      ):(<Redirect to ='/' />)}
          <Route path='/' exact component={HomePage} />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return{
    user:state.userList.user
  }
}


export default withRouter(connect(mapStateToProps)(RoutePage));
