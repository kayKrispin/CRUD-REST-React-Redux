import validation from './validation';
import renderField from './renderField';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

class WizardPageOne extends Component {

render() {
  const {handleSubmit} = this.props;
    return (
      <form onSubmit = {this.handleSubmit} >
        <Field type ="text" name="username" component ={renderField} label='First Name' />
        <Field type ="text" name='lastName' component = {renderField} label = 'Last Name' />
        <div>
          <button onClick = {this.props.on} type = 'submit' className = "next" >Next</button>
        </div>
      </form>
    );
  }
}


export default reduxForm({
  form:'wizardform',
  destroyOnUnmount:false,
  forceOnUnRegisterUnmount:true,
  validation
})(WizardPageOne)
