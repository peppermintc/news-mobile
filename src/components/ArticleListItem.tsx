import { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import StarIconOn from "../img/starIconOn.png";
import StarIconOff from "../img/starIconOff.png";
import { Article } from "../interfaces";
import { formatPubDate } from "../utils";

interface ArticleListItemProps {
  article: Article;
}

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
  line-height: 28px;
  flex: 1;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled.span`
  font-size: 13px;

  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.span`
  font-size: 13px;
  color: #6d6d6d;
  flex: 1;
  text-align: right;
`;

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  const [isScrap, setIsScrap] = useState<boolean>(false);

  useLayoutEffect(() => {
    const prevScrappedArticles: Article[] = [];
    const string = localStorage.getItem("scrappedArticles");
    if (string !== null) prevScrappedArticles.push(...JSON.parse(string));
    if (prevScrappedArticles.find((a) => a._id === article._id))
      setIsScrap(true);
  }, [article._id]);

  const onStarIconClick = () => {
    if (isScrap === false) {
      setIsScrap(true);

      const newScrappedArticles: Article[] = [];
      const string = localStorage.getItem("scrappedArticles");
      if (string === null) newScrappedArticles.push(article);
      else newScrappedArticles.push(...JSON.parse(string), article);

      localStorage.setItem(
        "scrappedArticles",
        JSON.stringify(newScrappedArticles)
      );
    } else {
      setIsScrap(false);

      const string = localStorage.getItem("scrappedArticles") as string;
      const prevScrappedArticles: Article[] = JSON.parse(string);

      const newScrappedArticles: Article[] = prevScrappedArticles.filter(
        (a) => a._id !== article._id
      );

      localStorage.setItem(
        "scrappedArticles",
        JSON.stringify(newScrappedArticles)
      );
    }
  };

  return (
    <Container>
      <SectionTop>
        <Title>{article.headline.main}</Title>
        <StarIcon
          src={isScrap ? StarIconOn : StarIconOff}
          alt="star"
          onClick={onStarIconClick}
        />
      </SectionTop>
      <SectionBottom>
        <Source>{article.source}</Source>
        <Author>{article.byline.original}</Author>
        <Date>{formatPubDate(article.pub_date)}</Date>
      </SectionBottom>
    </Container>
  );
};

export default ArticleListItem;
