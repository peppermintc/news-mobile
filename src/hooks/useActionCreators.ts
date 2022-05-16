import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/news";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const {
    setCurrentPage,
    setHomeFilter,
    setHomeArticles,
    setScrapFilter,
    addScrap,
    deleteScrap,
    setScrapPageStateLoaded,
    setModalOpen,
  } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch]
  );

  return {
    setCurrentPage,
    setHomeFilter,
    setHomeArticles,
    setScrapFilter,
    addScrap,
    deleteScrap,
    setScrapPageStateLoaded,
    setModalOpen,
  };
};

export default useActionCreators;
