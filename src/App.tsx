import BottomBar from "./components/BottomBar";
import HomePage from "./pages/HomePage";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import ScrapPage from "./pages/ScrapPage";
import ToastMessage from "./components/ToastMessage";
import { useSelector } from "react-redux";
import { RootState } from "./modules";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f1f4;
`;

const App = () => {
  const { isToastMessageOn } = useSelector((state: RootState) => state.news);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scrap" element={<ScrapPage />} />
      </Routes>
      <BottomBar />
      {isToastMessageOn && <ToastMessage />}
    </Container>
  );
};

export default App;
