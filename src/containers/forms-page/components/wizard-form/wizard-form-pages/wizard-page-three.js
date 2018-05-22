import validation from './validation';
import renderField from './renderField';
import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

const colors = ['blue','yellow','green','black','purple'];

const renderColoros = ( { input, meta: { touched,error } } )=>(
  <select {...input} >
    <option value="">Select a colour...</option>
    {colors.map(val => <option value={val} key={val}>{val}</option> )}
  </select>
)



class WizardPageThree extends Component {

  render() {
    return (
      <form>
      <label>Favourite Color</label>
        <Field component={renderColoros} name='colors' />
      </form>
    );
  }

}
export default reduxForm({
  form:'wizardform',
  destroyOnUnmount:false,
  forceOnUnRegisterUnmount:true,
  validation
})(WizardPageThree)
