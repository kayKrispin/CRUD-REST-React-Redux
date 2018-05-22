import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { postChosen } from '../../../actions/posts';
import PostForm from '../posts-form'
import { send } from '../../../actions/posts';
import { change } from 'redux-form';
import { reduxForm } from 'redux-form';
import { compsoe  } from 'redux';

class Post extends Component {

state ={
  checked : false
}

handleChoose = post =>{
  this.props.postChosen(post)
  this.setState(prevState => ({
    checked:!prevState.checked
  }));
}

handleChange = () =>{
  this.setState(prevState => ({
    checked:!prevState.checked
  }));
}


render() {
  const { body, id, title } = this.props.post;
  const showPostForm = this.state.checked  ;

  return (
      <div>
          <button onClick={()=>{ this.handleChoose(this.props.post)}}><strong></strong>Edit Post number : {id}</button>
            <li >
             {id}. <strong>Title:</strong>  {title}<br />
             <strong>Body:</strong>  {body}
            { showPostForm   ? (<PostForm onSubmit={this.save} />) : null }
          </li>
        <br/>
      </div>
    );
  }
}


function mapStateToProps(state){
    return {
      selected:state.postsList.postSelected,
      values:state.forms,
      eddited:state.postsList.post,
      newPost:state.postsList.newPost
    }
}



export default connect( mapStateToProps, { postChosen,send })( Post );
