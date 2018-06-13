import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const  warn = values =>{
  const warnings ={}
  if(values.age<18){
    warnings.age = 'Sry man to small..'
  }
  return warnings;
}

const validate = values =>{
  const errors= {};
  if(!values.username){
  errors.username = "Requird"
}else if(values.username.length>15){
  errors.username ='must be shorters'
}
if(!values.email){
  errors.email ="Nope without email"
}
if(values.age<18){
  errors.age = 'Too younh'
}else if(isNaN(Number(values.age))){
  errors.age = 'Nope only numbers mah'
}
return errors;
}
const required = value => value ? undefined : 'Required'
const maxLength = max=> value => value && value.length >max ? `Must be ${max} characters length`:undefined
const maxLength15 = maxLength(15);
const number = value => value && isNaN(Number(value)) ? 'Must be number' :undefined



const renderField = ({ input, type, label, meta: {touched,error,warning } }) =>(
  <div>
    <label className='h-1' >{label}</label>
    <div>
      <input className='inp-1' {...input} type={type} placeholder = {label} />
      {touched && ((error && <span>{error}</span>)||(warning && <span>{warning}</span> ))}
    </div>
  </div>
)

const renderMembers = ({ fields, meta: { touched,error,submitFailed} }) =>(
<ul>
  <li>
    <button  className='btn-1' type="button" onClick={()=>fields.push({})}>Add nice Members</button>
    {(touched || submitFailed) && error && <span>{error}</span>}
  </li>
  {fields.map((member,index)=>(
    <li key={index}>
      <button
        type="button"
        title="Remove Member"
        onClick={()=>fields.remove(index)}>Remove member</button>
        <h4>Members #{index+1}</h4>
        <Field
          label='First name'
          type="text"
          component={renderField}
          name={`${member}.firstName`}
         />
        <Field
          label='Last name'
          type="text"
          component={renderField}
          name={`${member}.lastName`}
         />
         <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
    </li>
  ))}
</ul>
);


const renderHobbies = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Hobby</button>
    </li>
    {fields.map((hobby, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Hobby"
          onClick={() => fields.remove(index)}
        >Remove hobby</button>
        <Field
          name={hobby}
          type="text"
          component={renderField}
          label={`Hobby #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);





const Forms  = props => {
    const { handleSubmit, reset, submitting, pristine } = props;
      return(

       <form >
       <div className="form-group">
         <Field   name="clubName" type="text" label="Club Name" component={renderField}/>
         <FieldArray name='members' component={renderMembers} />
         </div>
         <div>
           <button className='btn-1' type="submit" disabled={submitting}>Submit</button>
           <button className='btn-1' type="submit" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
         </div>
       </form>

     )
   }




export default reduxForm({
  form:'fieldArrays',
})(Forms)
