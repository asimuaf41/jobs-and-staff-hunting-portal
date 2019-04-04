const userReducer=(state={},action)=>{
    switch(action.type){
      case 'AUTH_USER':
      return { ...state, userData: action.payload };
      case 'REGISTER_USER':
      return { ...state, register: action.payload };
      case 'LOGIN_USER':
      return {...state,loginSuccess:action.payload}
      case 'NEWJOB':
      return {...state,userData:action.payload};
      case 'SET_JOBS':
      return action.payload
    default:
      return state;
  }
}
    

export default userReducer;
/*  var remainingUser=state.splice(action.payload._id,1);
          var newUser=remainingUser.splice(action.payload._id,0,action.payload);
          return newUser */