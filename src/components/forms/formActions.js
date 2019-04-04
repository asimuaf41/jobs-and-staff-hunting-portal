export const isFormValid1=(user_password,user_password1)=>{
let formIsValid;
var passwordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;
if(user_password.match(user_password1) && user_password.match(passwordformat) && user_password.length===user_password1.length){
    formIsValid=true;
  }
  
  else{
   
    formIsValid=false;
  }
return formIsValid;
}