
import axios from "axios";




export function getList() {


    // return fetch(`${process.env.REACT_APP_BASE_URL}/api/boynames/`).then((data) =>
    //   data.json()
    // );
  
    const user = localStorage.getItem("person");
  
    return axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/boynames/`, {
    
    })
    //.then((response) => this.setState({ articleId: response.data.id }));
    .then((data) =>  data.data);
  
  }


  export function getGirlList() {


    // return fetch(`${process.env.REACT_APP_BASE_URL}/api/boynames/`).then((data) =>
    //   data.json()
    // );
  
    const user = localStorage.getItem("person");
  
    return axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/girlnames/`, {
    
    })
    //.then((response) => this.setState({ articleId: response.data.id }));
    .then((data) =>  data.data);
  
  }