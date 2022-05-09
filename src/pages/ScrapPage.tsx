import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import ScrapFilterBar from "../components/ScrapFilterBar";

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const ScrapPage = () => {
  return (
    <Container>
      <ScrapFilterBar />
      <ArticleList />
    </Container>
  );
};

export default ScrapPage;
