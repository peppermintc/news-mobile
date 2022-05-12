import { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosGetArticles } from "../api";
import ArticleList from "../components/ArticleList";
import HomeFilterBar from "../components/HomeFilterBar";
import { Article } from "../interfaces";

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axiosGetArticles().then(({ response }) => setArticles(response.docs));
  }, []);

  return (
    <Container>
      <HomeFilterBar />
      <ArticleList articles={articles} />
    </Container>
  );
};

export default HomePage;
