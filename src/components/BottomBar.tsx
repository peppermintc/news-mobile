import styled from "styled-components";
import HomeIconWhite from "../img/homeIconWhite.png";
import HomeIconGray from "../img/homeIconGray.png";
import ScrapIconWhite from "../img/scrapIconWhite.png";
import ScrapIconGray from "../img/scrapIconGray.png";

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

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 45px;
  color: #6d6d6d;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const BottomBar = () => {
  return (
    <Container>
      <Button>
        <Icon src={HomeIconGray} alt="icon" />
        <span>홈</span>
      </Button>
      <Button>
        <Icon src={ScrapIconGray} alt="icon" />
        <span>스크랩</span>
      </Button>
    </Container>
  );
};

export default BottomBar;
