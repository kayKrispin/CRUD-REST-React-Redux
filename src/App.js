import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar'
import AppBar from 'material-ui/AppBar';
import SearchPage from './containers/search-page';
import UserPage from './containers/users-page';
import { BrowserRouter as Router,Switch,Link, Route,NavLink } from 'react-router-dom';
import FormsPage from './containers/forms-page';
import PostsPage from './containers/posts-page';
import ComentsPage from './containers/coments-page';
import HomePage from './containers/home-page';
import RoutesPage from './routes'



class App extends Component {
  render() {
    return (
      <div>
        <RoutesPage />
      </div>
    );
  }
}


export default App;
