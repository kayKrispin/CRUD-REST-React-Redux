import validation from './validation';
import renderField from './renderField';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

const renderError = ({meta: { touched, error}}) => touched && error ?
<span>{error}</span> : false

class WizardPageTwo extends Component {

  render() {
    const {previousPage,onSubmit} = this.props;
    return (
        <form>
          <Field type="text" component={renderField} label='Email' name='email' />
            <label>Sex</label>
          <div>
            <div>
              <label>Male<Field  component = {renderField} name="male" type = 'radio' value = 'male' /></label>
              <label>Female<Field  component = {renderField} name='male' type='radio'/></label>
              <Field component = {renderError}  name ="sex" />
            </div>
          </div>
          <div>
            <button type = 'button' onClick ={previousPage} >Previous Page</button>
            <button  type ='button' onClick={onSubmit}>Next Page</button>
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
})(WizardPageTwo)
