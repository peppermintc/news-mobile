import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { axiosGetArticles } from "../api";
import ArticleList from "../components/ArticleList";
import HomeFilterBar from "../components/HomeFilterBar";
import useActionCreators from "../hooks/useActionCreators";
import { RootState } from "../modules";

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const HomePage = () => {
  const { homeArticles } = useSelector((state: RootState) => state.news);
  const { setHomeArticles } = useActionCreators();

  useEffect(() => {
    axiosGetArticles().then(({ response }) => setHomeArticles(response.docs));
  }, [setHomeArticles]);

  return (
    <Container>
      <HomeFilterBar />
      <ArticleList articles={homeArticles} />
    </Container>
  );
};

export default HomePage;
