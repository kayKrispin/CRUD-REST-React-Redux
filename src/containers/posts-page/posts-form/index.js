import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import { postChosen } from '../../../actions/posts';
import { send } from '../../../actions/posts';


const renderField = ({ input, type, label, meta: {touched,error,warning } }) =>(
  <div>
    <label >{label}</label>
    <div>
      <textarea {...input} type={type} placeholder = {label} />
      {touched && ((error && <span>{error}</span>)||(warning && <span>{warning}</span> ))}
    </div>
  </div>
)

class PostForm extends Component {

state={
  checked:true
}

  save = (values) =>{
    this.props.send(values).then(res=> this.setState({checked:false}))

  }


render() {
    const { handleSubmit, reset, load, submitting, pristine, initialValues } = this.props;

    return this.state.checked ? (
       <form onSubmit={handleSubmit(this.save)}>
         <Field  name="title"  type="text" label={ initialValues ? "Eddit Title" : "Create Title"} component={renderField}/>
         <Field  name="body"  type="text" label={initialValues ? "Eddit Body" : "Create Body"} component={renderField}/>
         <div>
           <button type='submit' disabled={submitting}>Submit</button>
           <button type="submit" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
         </div>
       </form>
     ) :null
   }
}


PostForm  =  reduxForm({
  form:'forms',
  enableReinitialize: true,
  destroyOnUnmount : false
})(PostForm)

PostForm = connect(
  state => ({
    initialValues : state.postsList.postSelected,
 // pull initial values from account reducer
  }),
  {load:postChosen }               // bind account loading action creator
)(PostForm)

export default connect( null, { send })(PostForm);
