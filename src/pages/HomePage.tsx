/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { axiosGetArticles } from "../api";
import ArticleList from "../components/ArticleList";
import HomeFilterBar from "../components/HomeFilterBar";
import LoadingSpinner from "../components/LoadingSpinner";
import useActionCreators from "../hooks/useActionCreators";
import { Article } from "../interfaces";
import { RootState } from "../modules";

const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState<number>(0);
  const [isLoadingOn, setIsLoadingOn] = useState<boolean>(false);

  const homeFilter = useSelector((state: RootState) => state.news.homeFilter);
  const homeArticles = useSelector(
    (state: RootState) => state.news.homeArticles
  );

  const { setHomeArticles } = useActionCreators();

  useEffect(() => {
    setIsLoadingOn(true);

    axiosGetArticles(homeFilter, page)
      .then(({ response }) => {
        const newArticles: Article[] = response.docs;

        if (homeArticles.length === 0) setHomeArticles(newArticles);
        else setHomeArticles([...homeArticles, ...newArticles]);
      })
      .finally(() => setIsLoadingOn(false));
  }, [homeFilter, page]);

  useEffect(() => {
    setPage(0);
    setHomeArticles([]);
  }, [homeFilter]);

  const onContainerScroll = () => {
    if (containerRef.current === null) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollHeight - scrollTop <= clientHeight)
      setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container ref={containerRef} onScroll={onContainerScroll}>
      <HomeFilterBar />
      <ArticleList articles={homeArticles} />
      {isLoadingOn && <LoadingSpinner />}
    </Container>
  );
};

export default HomePage;
