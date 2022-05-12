import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/news";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const {
    setCurrentPage,
    openHomeModal,
    closeHomeModal,
    openScrapModal,
    closeScrapModal,
    setHomeFilter,
  } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch]
  );

  return {
    setCurrentPage,
    openHomeModal,
    closeHomeModal,
    openScrapModal,
    closeScrapModal,
    setHomeFilter,
  };
};

export default useActionCreators;
