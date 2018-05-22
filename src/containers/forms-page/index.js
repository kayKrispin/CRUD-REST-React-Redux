import React, { Component } from 'react';
import Forms from './components/forms';
import { Values } from "redux-form-website-template";


class FormsPage extends Component {

  submit = values => {
    console.log(values);
  }

  render() {
    return (
    <div style={{padding:'15px'}}>
      <h2> Fields of Arrays</h2>
      <Forms onSubmit={this.submit} />
      <Values form="fieldArrays" />
    </div>
    );
  }
}

export default FormsPage;
