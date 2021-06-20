import axios from "axios";



export function createUser(user,pw) {
  console.log("user",user,'password',pw)
return axios.post("http://localhost:3001/api/signup?user="+ user + "&pw=" + pw)
  .then(response =>    
response.data)
  .catch(err => console.warn(err));      
}


export function loginUser(user,pw) {
    console.log("user",user,'password',pw)
  return axios.post("http://localhost:3001/api/login?user="+ user + "&pw=" + pw)
    .then(response =>    
  response.data)
    .catch(err => console.warn(err));      
  }



