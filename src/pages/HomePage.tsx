import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { axiosGetArticles } from "../api";
import ArticleList from "../components/ArticleList";
import HomeFilterBar from "../components/HomeFilterBar";
import useActionCreators from "../hooks/useActionCreators";
import { RootState } from "../modules";

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { homeArticles, homeFilter } = useSelector(
    (state: RootState) => state.news
  );
  const { setHomeArticles } = useActionCreators();

  useEffect(() => {
    axiosGetArticles(homeFilter).then(({ response }) =>
      setHomeArticles(response.docs)
    );
  }, [setHomeArticles, homeFilter]);

  const onContainerScroll = () => {
    if (containerRef.current === null) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollHeight - scrollTop <= clientHeight) {
      console.log("fetch next page / append articles");
    }
  };

  return (
    <Container ref={containerRef} onScroll={onContainerScroll}>
      <HomeFilterBar />
      <ArticleList articles={homeArticles} />
    </Container>
  );
};

export default HomePage;
