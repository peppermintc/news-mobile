import axios from "axios";

export const axiosGetArticles = async () => {
  return await axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": "9HjHkzg0V8sD7Eg9sIdTUu9stiqsL5RU",
        // fq: 'section_name:("World") AND glocations:("South Korea")',
        // fq: 'section_name:("World") AND glocations:("China")',
        // fq: 'section_name:("World") AND glocations:("Japan")',
        // fq: 'section_name:("World") AND glocations:("United States")',
        // fq: 'section_name:("World") AND glocations:("North Korea")',
        // fq: 'section_name:("World") AND glocations:("Russia")',
        // fq: 'section_name:("World") AND glocations:("France")',
        // fq: 'section_name:("World") AND glocations:("England") AND glocations:("France")',
      },
    })
    .then((response) => response.data)
    .catch(console.error);
};
