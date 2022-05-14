/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import NoScrapData from "../components/NoScrapData";
import ScrapFilterBar from "../components/ScrapFilterBar";
import useActionCreators from "../hooks/useActionCreators";
import { Article } from "../interfaces";
import { RootState } from "../modules";
import { countryToEnglish } from "../utils";

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const ScrapPage = () => {
  const [scrappedArticles, setScrappedArticles] = useState<Article[]>([]);

  const scrapFilter = useSelector((state: RootState) => state.news.scrapFilter);
  const scrapPageStateLoaded = useSelector(
    (state: RootState) => state.news.scrapPageStateLoaded
  );

  const { setScrapPageStateLoaded } = useActionCreators();

  useLayoutEffect(() => {
    const string = localStorage.getItem("scrappedArticles");

    if (string === null) return;

    const array = JSON.parse(string);
    setScrappedArticles(array);
  }, []);

  useEffect(() => {
    if (scrappedArticles.length === 0) return;
    else setScrapPageStateLoaded(true);
  }, [scrappedArticles]);

  useEffect(() => {
    if (scrapPageStateLoaded === false) return;
    if (scrappedArticles === []) return;

    // newScrappedArticles
    let newScrappedArticles = [...scrappedArticles];

    // headline filter
    if (scrapFilter.headline !== "") {
      newScrappedArticles = newScrappedArticles.filter((a) =>
        a.headline.main.includes(scrapFilter.headline)
      );
    }

    // date filter
    if (scrapFilter.date !== "") {
      newScrappedArticles = newScrappedArticles.filter((a) => {
        const aDate = a.pub_date.split("T")[0].replaceAll("-", ".");
        if (aDate === scrapFilter.date) return true;
        else return false;
      });
    }

    // country filter
    if (scrapFilter.country.length !== 0) {
      newScrappedArticles = newScrappedArticles.filter((a) => {
        let isIncluded: boolean = false;

        scrapFilter.country.forEach((c) => {
          a.keywords.forEach((k) => {
            if (k.name === "glocations" && k.value === countryToEnglish(c))
              isIncluded = true;
          });
        });

        return isIncluded;
      });
    }

    setScrappedArticles(newScrappedArticles);
  }, [scrapFilter, scrapPageStateLoaded]);

  useEffect(() => {
    return () => {
      setScrapPageStateLoaded(false);
    };
  }, []);

  return (
    <Container>
      {scrappedArticles.length === 0 && <NoScrapData />}
      {scrappedArticles.length > 0 && (
        <>
          <ScrapFilterBar />
          <ArticleList articles={scrappedArticles} />
        </>
      )}
    </Container>
  );
};

export default ScrapPage;
