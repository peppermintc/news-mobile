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
  margin-top: 8px;
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

const Source = styled.span`
  font-size: 13px;
  margin-right: 8px;
`;

const Author = styled.span`
  font-size: 13px;
`;

const Date = styled.span`
  font-size: 13px;
  color: #6d6d6d;
  flex: 1;
  text-align: right;
`;

const ArticleListItem = () => {
  return (
    <Container>
      <SectionTop>
        <Title>국방붐ㄴㅇㅁㄴ</Title>
        <StarIcon src={StarIconOff} alt="star" />
      </SectionTop>
      <SectionBottom>
        <Source>조선일보</Source>
        <Author>김정화 기자</Author>
        <Date>2021.3.15. (목)</Date>
      </SectionBottom>
    </Container>
  );
};

export default ArticleListItem;
