import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as communityActionCreators from "../modules/news";

const useActionCreators = () => {
  const dispatch = useDispatch();

  const { initStore, setCurrentPage } = useMemo(
    () => bindActionCreators(communityActionCreators, dispatch),
    [dispatch]
  );

  return { initStore, setCurrentPage };
};

export default useActionCreators;
