import axios from "axios";

export const axiosGetArticles = async () => {
  return await axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "9HjHkzg0V8sD7Eg9sIdTUu9stiqsL5RU",
      },
    })
    .then((response) => response.data)
    .catch(console.error);
};
