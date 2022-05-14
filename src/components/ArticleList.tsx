import styled from "styled-components";
import { Article } from "../interfaces";
import ArticleListItem from "./ArticleListItem";

interface ArticleListProps {
  articles: Article[];
}

const Container = styled.div`
  padding: 20px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <Container>
      {articles.map((article, index) => (
        <ArticleListItem key={`${index}/${article._id}`} article={article} />
      ))}
    </Container>
  );
};

export default ArticleList;
