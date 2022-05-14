import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import NoScrapData from "../components/NoScrapData";
import ScrapFilterBar from "../components/ScrapFilterBar";
import { Article } from "../interfaces";

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const ScrapPage = () => {
  const [scrappedArticles, setScrappedArticles] = useState<Article[]>([]);

  useLayoutEffect(() => {
    const string = localStorage.getItem("scrappedArticles");

    if (string === null) return;

    const array = JSON.parse(string);
    setScrappedArticles(array);
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
