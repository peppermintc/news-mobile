import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useActionCreators from "../hooks/useActionCreators";
import FileIcon from "../img/fileIcon.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Text = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #6d6d6d;
  margin-top: 8px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #3478f6;
  border-radius: 16px;
  color: white;
  border: none;
  font-size: 16px;
  width: 100%;
  padding: 18px 0;
  cursor: pointer;
`;

const NoScrapData = () => {
  const navigate = useNavigate();
  const { setCurrentPage } = useActionCreators();

  const onButtonClick = () => {
    navigate("/");
    setCurrentPage("home");
  };

  return (
    <Container>
      <img src={FileIcon} alt="file" />
      <Text>저장된 스크랩이 없습니다.</Text>
      <Button onClick={onButtonClick}>스크랩 하러 가기</Button>
    </Container>
  );
};

export default NoScrapData;
