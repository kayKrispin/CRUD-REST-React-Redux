import React from 'react';


const renderField = ({ input, type, label, meta: {touched,error,warning } }) =>(
  <div>
    <label >{label}</label>
    <div>
      <input {...input} type={type}  placeholder = {label} />
      {touched && ((error && <span>{error}</span>)||(warning && <span>{warning}</span> ))}
    </div>
  </div>
)


export default renderField;
