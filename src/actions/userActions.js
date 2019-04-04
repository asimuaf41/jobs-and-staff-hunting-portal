import axios from "axios";

export const registerUser=(dataToSubmit)=>{
    const request = axios
    .post('/signup', dataToSubmit)
    .then(res => res.data);
  return {
    type: 'REGISTER_USER',
    payload: request
  };
}
export const loginUSER=(dataToSubmit)=>{
    const request=axios
    .post('/login', dataToSubmit)
    .then(res => res.data);
    return {
        type:'LOGIN_USER',
        payload:request
    }

}
export function auth() {
    const request = axios.get('/auth').then(res => res.data);
    return {
      type: 'AUTH_USER',
      payload: request
    };
  }
 export const jobPost=(newJob) =>{
   const request=axios
   .post('/newJob',newJob)
   .then(res=>res.data);
   return {
     type: 'NEWJOB',
     payload:request
   };
 }
 export const setJobs=(jobs)=>{
return {type:"SET_JOBS",payload:jobs}
 }
/*   http://localhost:8000 */