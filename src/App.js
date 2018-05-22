import React, { Component } from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar'
import AppBar from 'material-ui/AppBar';
import SearchPage from './containers/search-page';
import UserPage from './containers/users-page';
import {BrowserRouter as Router,Switch,Link, Route,NavLink} from 'react-router-dom';
import FormsPage from './containers/forms-page';
import PostsPage from './containers/posts-page';
import ComentsPage from './containers/coments-page';


class App extends Component {
  render() {
    return (
      <div>
      <ul>
      <li style={{display:'inline-block'}}> <NavLink to='/' exact activeStyle={{color:'orange'}}><h1>Home</h1></NavLink> </li>
      <li style={{display:'inline-block',marginLeft:'20px'}}> <NavLink to='/search' activeStyle={{color:'orange'}}><h1>Search</h1></NavLink> </li>
      <li style={{display:'inline-block' ,marginLeft:'20px'}}>  <NavLink to='/forms' activeStyle={{color:'orange'}}><h1>Forms</h1></NavLink> </li>
      <li style={{display:'inline-block' ,marginLeft:'20px'}}>  <NavLink to='/users' activeStyle={{color:'orange'}}><h1>User Page</h1></NavLink> </li>
      </ul>

        <Route path='/search' exact component={SearchPage} />
        <Route path='/forms' exact component={FormsPage} />
        <Route path='/users' exact component={UserPage} />
        <Route path='/posts/:id' exact component={PostsPage} />
        <Route path='/posts/comments/:id' exact component={ComentsPage} />
        </div>
    );
  }
}

export default App;
