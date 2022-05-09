import { useSelector } from "react-redux";
import styled from "styled-components";
import ArticleList from "../components/ArticleList";
import HeaderBar from "../components/HeaderBar";
import Modal from "../components/Modal";
import { RootState } from "../modules";

const Container = styled.div`
  width: 100%;
  flex: 1;
`;

const HomePage = () => {
  const isModalOn = useSelector((state: RootState) => state.news.isModalOn);

  return (
    <Container>
      <HeaderBar />
      <ArticleList />
      {isModalOn && <Modal />}
    </Container>
  );
};

export default HomePage;
