import axios from "axios";

export function getGif() {
  return (
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=X5XuTh2bxjcKtI1RHamVSAFrkHtaEUc1&q= actor  nick`,
        {}
      )
      //.then((response) => this.setState({ articleId: response.data.id }));
      .then((data) => data.data)
  );
}
