import React, { Component } from 'react';
import SearchForm from './components/search-form';
import SearchResult from './components/search-result';
import NavBar from '../../components/navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';



class SearchPage extends Component {

  render() {
    const muiTheme = getMuiTheme({
  textarea: {
    color: 'white',
  }
});
    return (
      <div>
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar />
        <SearchForm />
        </MuiThemeProvider>
      </div>
    );
  }

}

export default SearchPage;
