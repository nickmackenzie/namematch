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
function getLikes() {
  const userID = localStorage.getItem("person");

  return (
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/Matches/`, {
        params: { id: userID },
      })
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data.json())
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
