import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import HeaderBar from "../components/HeaderBar";
import Modal from "../components/Modal";

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const HomePage = () => {
  return (
    <Container>
      <HeaderBar />
      <ArticleList />
      <Modal />
    </Container>
  );
};

export default HomePage;
