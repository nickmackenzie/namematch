import axios from "axios";

export function getList() {
  // return fetch(`${process.env.REACT_APP_BASE_URL}/api/boynames/`).then((data) =>
  //   data.json()
  // );

  const user = localStorage.getItem("email");
  console.log("user", user);
  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/boynames/?user=${user}`, {})
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}

export function getGirlList() {
  // return fetch(`${process.env.REACT_APP_BASE_URL}/api/boynames/`).then((data) =>
  //   data.json()
  // );

  const user = localStorage.getItem("email");

  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/girlnames/?user=${user}`, {})
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}
