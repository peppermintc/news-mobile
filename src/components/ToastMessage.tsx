import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../modules";

const Container = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #fcb800;
  color: white;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 10px;
`;

const ToastMessage = () => {
  const toastMessage = useSelector(
    (state: RootState) => state.news.toastMessage
  );

  return <Container>{toastMessage}</Container>;
};

export default ToastMessage;
