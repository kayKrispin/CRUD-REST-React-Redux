import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {fetchImages} from '../../../../actions/images'
import FlatButton from 'material-ui/FlatButton';
import SearchResult from '../search-result';
import {store} from '../../../../index';
import {GridList,GridTile} from 'material-ui/GridList';import IconButton from 'material-ui/IconButton';


class SearchForm extends Component {


  state={
    loading:false,
    inputText :'',
    apiAdress:'https://pixabay.com/api',
    key:'8946290-1bb353436a4e3a9c6ec6d9445',
    amount:15,
    images:[]
  }


onChange = (e) =>{
  const val = e.target.value
  this.setState({[e.target.name]:val},()=>{
  const query = this.state.inputText;
    this.getImages(query);


  });
}



getImages = (query) =>{
  this.props.fetchImages(query)
  .then(res=>this.setState({images:res.images}))
  .catch(err=>console.log(err));

}


  render() {
    return (
      <div>
          <TextField
            name='inputText'
            value={this.state.inputText}
            onChange={this.onChange}
            floatingLabelText='Search for Images'
            fullWidth={true}
           /><br/>
          <SelectField
          value={this.state.amount}
          onChange={this.onAmountChange}
          floatingLabelText='Amount'>

            <MenuItem value={5} primaryText='5'/>
            <MenuItem value={10} primaryText='10'/>
            <MenuItem value={15} primaryText='15'/>
            <MenuItem value={30} primaryText='30'/>
            <MenuItem value={40} primaryText='40'/>
          </SelectField><br/>
           <FlatButton onClick = { this.getImages } label="Primary" primary={ true } /><br/>
             <IconButton iconClassName="muidocs-icon-custom-github" />

           <SearchResult images={this.state.images} />
          <GridList cols={3} cellHeight={'auto'}>
            {this.state.images.map(img=>{
              return <div><GridTile><SearchResult img={img.largeImageURL}/></GridTile></div>
            })}
            </GridList>

      </div>
    );
  }

}

export default connect(null,{fetchImages})(SearchForm);
