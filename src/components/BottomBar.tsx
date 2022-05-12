import styled from "styled-components";
import HomeIconWhite from "../img/homeIconWhite.png";
import HomeIconGray from "../img/homeIconGray.png";
import ScrapIconWhite from "../img/scrapIconWhite.png";
import ScrapIconGray from "../img/scrapIconGray.png";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import useActionCreators from "../hooks/useActionCreators";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 85px;
  background-color: black;
  border-radius: 30px 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 165px;
  position: fixed;
  bottom: 0;
`;

const Button = styled.button<{ isSelected: boolean }>`
  background-color: transparent;
  border: none;
  height: 45px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "white" : "#6d6d6d")};
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const BottomBar = () => {
  const currentPage = useSelector((state: RootState) => state.news.currentPage);

  const { setCurrentPage } = useActionCreators();

  const isHomeSelected = currentPage === "home";
  const isScrapSelected = currentPage === "scrap";

  const getHomeIconSrc = isHomeSelected ? HomeIconWhite : HomeIconGray;
  const getScrapIconSrc = isScrapSelected ? ScrapIconWhite : ScrapIconGray;

  const onHomeButtonClick = () => setCurrentPage("home");
  const onScrapButtonClick = () => setCurrentPage("scrap");

  return (
    <Container>
      <Link to="/">
        <Button onClick={onHomeButtonClick} isSelected={isHomeSelected}>
          <Icon src={getHomeIconSrc} alt="icon" />
          <span>홈</span>
        </Button>
      </Link>
      <Link to="/scrap">
        <Button onClick={onScrapButtonClick} isSelected={isScrapSelected}>
          <Icon src={getScrapIconSrc} alt="icon" />
          <span>스크랩</span>
        </Button>
      </Link>
    </Container>
  );
};

export default BottomBar;
