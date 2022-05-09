import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import HomeFilterBar from "../components/HomeFilterBar";

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <HomeFilterBar />
      <ArticleList />
    </Container>
  );
};

export default HomePage;
