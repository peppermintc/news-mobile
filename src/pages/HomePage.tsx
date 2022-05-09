import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import HeaderBar from "../components/HeaderBar";

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <HeaderBar />
      <ArticleList />
    </Container>
  );
};

export default HomePage;
