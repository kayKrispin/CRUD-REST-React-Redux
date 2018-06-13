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
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';

class SearchForm extends Component {
  state={
    loading:false,
    inputText :'',
    apiAdress:'https://pixabay.com/api',
    key:'8946290-1bb353436a4e3a9c6ec6d9445',
    amount:15,
    images:[],
    open:false,
    currentImg:''
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

handleClose = ()=>{
  this.setState({
    open:false
  })
}
handleOpen = img =>{
  this.setState({open:true,currentImg:img})
}

  render() {
  const actions = [
    <FlatButton label="Close" onClick={this.handleClose} primary={true} />
  ]
    return (
      <div >
          <TextField
          style={{backgroundColor: '#fff'}}

            className='Text'
            style={{color:'#fff'}}
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


           <SearchResult images={this.state.images} />
           <GridList cols={2}>
            {this.state.images.map(img=>{
              return <GridTile title={img.tags} id={img.id} subtitle={<span>by <strong>{img.user}</strong></span>} actionIcon={
                <IconButton onClick={()=>this.handleOpen(img.largeImageURL)} ><ZoomIn color="white" /> </IconButton>
              } ><img src={img.largeImageURL} alt=""/> </GridTile>
            })}
            </GridList>
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
              <img src={this.state.currentImg}  style={{width:'100%'}}alt=""/>
            </Dialog>
      </div>
    );
  }
}
export default connect(null,{fetchImages})(SearchForm);
