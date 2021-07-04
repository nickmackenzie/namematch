import axios from "axios";

export function createUser(user, pw) {
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/api/signup?user=` + user + "&pw=" + pw
    )
    .then((response) => response.data)
    .catch((err) => console.warn(err));
}

export function loginUser(user, pw) {
  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/api/login?user=` + user + "&pw=" + pw
    )
    .then((response) => response.data)

    .catch((err) => console.warn(err));
}

export function fetchUser(email) {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}` + email)
    .then((response) => response.data)
    .catch((err) => console.warn(err));
}
