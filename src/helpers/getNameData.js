import axios from "axios";

export function getList() {
  // return fetch(`${process.env.REACT_APP_BASE_URL}/api/boynames/`).then((data) =>
  //   data.json()
  // );

  const user = localStorage.getItem("person");
  console.log("user", user);
  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/boynames/`, {
        params: { user: user },
      })
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}

export function getGirlList() {
  // return fetch(`${process.env.REACT_APP_BASE_URL}/api/boynames/`).then((data) =>
  //   data.json()
  // );

  const user = localStorage.getItem("person");

  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/girlnames/`, {})
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}
