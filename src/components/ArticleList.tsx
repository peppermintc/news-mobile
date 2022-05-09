import styled from "styled-components";
import ArticleListItem from "./ArticleListItem";

const SAMPLE = [1, 2, 3, 4, 5];

const Container = styled.div`
  padding: 20px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ArticleList = () => {
  return (
    <Container>
      {SAMPLE.map((article) => (
        <ArticleListItem key={article} />
      ))}
    </Container>
  );
};

export default ArticleList;
