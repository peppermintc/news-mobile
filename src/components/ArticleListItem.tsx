import { useState } from "react";
import styled from "styled-components";
import StarIconOn from "../img/starIconOn.png";
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
  cursor: pointer;
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
  const [isScrap, setIsScrap] = useState<boolean>(false);

  const onStarIconClick = () => setIsScrap((prevIsScrap) => !prevIsScrap);

  return (
    <Container>
      <SectionTop>
        <Title>headline.main</Title>
        <StarIcon
          src={isScrap ? StarIconOn : StarIconOff}
          alt="star"
          onClick={onStarIconClick}
        />
      </SectionTop>
      <SectionBottom>
        <Source>source</Source>
        <Author>byline.original</Author>
        <Date>pub_date</Date>
      </SectionBottom>
    </Container>
  );
};

export default ArticleListItem;
