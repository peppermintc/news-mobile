import styled from "styled-components";
import StarIconOff from "../img/starIconOff.png";

const Container = styled.div`
  background-color: #fefefe;
  width: 100%;
  height: 104px;
  border-radius: 8px;
  padding: 10px 20px;
`;

const SectionTop = styled.div`
  width: 100%;
  display: flex;
`;

const SectionBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  height: 56px;
  font-weight: 600;
  font-size: 18px;
  flex: 1;
`;

const StarIcon = styled.img`
  margin: 8px 8px 8px 15px;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArticleListItem = () => {
  return (
    <Container>
      <SectionTop>
        <Title>국방붐ㄴㅇㅁㄴ</Title>
        <StarIcon src={StarIconOff} alt="star" />
      </SectionTop>
      <SectionBottom>
        <div>조선일보 김정화 기자</div>
        <div>2021.3.15. (목)</div>
      </SectionBottom>
    </Container>
  );
};

export default ArticleListItem;
