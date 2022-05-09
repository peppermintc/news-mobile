import BottomBar from "./components/BottomBar";
import HomePage from "./pages/HomePage";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f1f4;
`;

const App = () => {
  return (
    <Container>
      <HomePage />
      <BottomBar />
    </Container>
  );
};

export default App;
