import styled from "styled-components";
import loadingSpinner from "../img/loadingSpinner.gif";

const Background = styled.div`
  background-color: black;
  opacity: 0.1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Spinner = styled.img`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const LoadingSpinner = () => {
  return (
    <>
      <Spinner src={loadingSpinner} alt="loading" />
      <Background />
    </>
  );
};

export default LoadingSpinner;
