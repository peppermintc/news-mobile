import styled from "styled-components";

const Background = styled.div`
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: white;
  border-radius: 16px;
  width: calc(100% - 40px);
  height: 480px;
  padding: 20px;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 7px;
`;

const ApplyButton = styled.button`
  border: none;
  background-color: #3478f6;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  width: 100%;
  height: 60px;
  &:focus {
    outline: none;
  }
`;

const Modal = () => {
  return (
    <>
      <Container>
        <Label>헤드라인</Label>
        <Label>날짜</Label>
        <Label>국가</Label>
        <ApplyButton>필터 적용하기</ApplyButton>
      </Container>
      <Background />
    </>
  );
};

export default Modal;
