import React, { Component } from 'react';
import SearchForm from './components/search-form';
import SearchResult from './components/search-result';
import NavBar from '../../components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SearchPage extends Component {

  render() {
    return (
      <div>
      <MuiThemeProvider>
        <NavBar />
        <SearchForm />
        </MuiThemeProvider>
      </div>
    );
  }

}

export default SearchPage;
