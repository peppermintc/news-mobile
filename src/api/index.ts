import axios from "axios";
import { Filter } from "../interfaces";

export const axiosGetArticles = async (filter: Filter, page: number = 0) => {
  const makeHeadlineFQ = () => {
    if (filter.headline === "") return "";
    else return ` AND headline:("${filter.headline}")`;
  };

  const makeDateFQ = () => {
    if (filter.date === "") return "";
    else return ` AND pub_date:("${filter.date.replaceAll(".", "-")}")`;
  };

  const makeCountryFQ = () => {
    if (filter.country.length === 0) return "";
    else {
      let result = ` AND section_name:("World")`;
      filter.country.forEach((country) => {
        if (country === "대한민국") result += ` AND glocations:("South Korea")`;
        else if (country === "중국") result += ` AND glocations:("China")`;
        else if (country === "일본") result += ` AND glocations:("Japan")`;
        else if (country === "미국")
          result += ` AND glocations:("United States")`;
        else if (country === "북한")
          result += ` AND glocations:("North Korea")`;
        else if (country === "러시아") result += ` AND glocations:("Russia")`;
        else if (country === "프랑스") result += ` AND glocations:("France")`;
        else if (country === "영국") result += ` AND glocations:("England")`;
      });
      return result;
    }
  };

  const fq_headline = makeHeadlineFQ();
  const fq_date = makeDateFQ();
  const fq_country = makeCountryFQ();

  let fq = fq_headline + fq_date + fq_country;
  fq = fq.slice(5);

  return await axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "9HjHkzg0V8sD7Eg9sIdTUu9stiqsL5RU",
        fq: fq,
        page: page,
      },
    })
    .then((response) => response.data)
    .catch(console.error);
};
