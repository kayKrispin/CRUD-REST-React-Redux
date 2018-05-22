const validation = values =>{
  const errors = {};
  if(!values.username){
  errors.username = 'Cant Without name'
  }
  if(!values.lastname){
    errors.lastname = 'Cant without lastname'
  }
  if(!values.email){
    errors.email = 'Cant Without email'
  }
  if(!values.color){
    errors.color = 'cant Wuthout color'
  }
  return errors;
}


export default validation
