import BottomBar from "./components/BottomBar";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ScrapPage from "./pages/ScrapPage";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scrap" element={<ScrapPage />} />
      </Routes>
      <BottomBar />
    </Container>
  );
};

export default App;
