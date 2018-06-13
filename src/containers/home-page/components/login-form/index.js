import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { login } from '../../../../actions/users';
import { logout } from '../../../../actions/users'



const renderField = ({ input, type, label, meta: {touched,error,warning } }) =>(
  <div>

      {touched && ((error && <span>{error}</span>)||(warning && <span>{warning}</span> ))}
      <input {...input} className='inp' placeholder={label} type="text" />
</div>
)

class LoginForm extends Component {

save = (values) =>{
    this.props.login(values)
}

delete = () =>{
  this.props.logout()
}

render() {
    const { handleSubmit, reset, load, submitting, pristine, initialValues } = this.props;

    return !this.props.user.first_name ? (
      <div className='signin'>
       <form onSubmit={handleSubmit(this.save)}>
          <Field  name="Username"  type="text" label='Username' component={renderField}/>
          <Field  name="Password"   type="text" label="Password" component={renderField}/>
         <button className='btn'>Sign In</button>
        </form>
      </div>
    ) : (<div><h1 style={{color:'#fff',textAlign:'center',fontWeight:'lighter',fontSize:'50px'}}> Wellcome home {this.props.user.Username}</h1>
       <button  onClick={()=>{this.delete()}} className='btn btn-log'>Log Out</button></div>)
   }
}



function mapStateToProps(state){
  return {
    user:state.user
  }
}

export default compose(
	connect((state, mapStateToProps) => ({
    user:state.userList.user
  }), { login,logout }),
	reduxForm({
		form: 'login',
		enableReinitialize: true,
    destroyOnUnmount : false
	})
)(LoginForm);
