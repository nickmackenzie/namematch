import axios from "axios";

export function getMatches(userID) {
  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/partnerMatch/`, {
        params: { email: userID },
      })
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}
export function getLikes() {
  const userID = localStorage.getItem("email");

  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/getLikes/`, {
        params: { email: userID },
      })
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data)
  );
}

export function getLikesUser(userID) {
  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/Matches/`, {
        params: { email: userID },
      })
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}
