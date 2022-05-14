import { Dispatch } from "redux";
import { RootState } from ".";
import { Article, Filter, Page } from "../interfaces";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface NewsState {
  currentPage: Page;
  homeArticles: Article[];
  homeFilter: Filter;
  scrapFilter: Filter;
  scrapPageStateLoaded: boolean;
  isToastMessageOn: boolean;
  toastMessage: string;
}

// Action Types
const SET_HOME_ARTICLES = "SET_HOME_ARTICLES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_HOME_FILTER = "SET_HOME_FILTER";
const SET_SCRAP_FILTER = "SET_SCRAP_FILTER";
const SET_SCRAP_PAGE_STATE_LOADED = "SET_SCRAP_PAGE_STATE_LOADED";
const SET_IS_TOAST_MESSAGE_ON = "SET_IS_TOAST_MESSAGE_ON";
const SET_TOAST_MESSAGE = "SET_TOAST_MESSAGE";

// Action Creators
export const setHomeArticles =
  (newArticles: Article[]) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_HOME_ARTICLES,
      payload: newArticles,
    });
  };

export const openHomeModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { homeFilter } = getState().news;
    dispatch({
      type: SET_HOME_FILTER,
      payload: {
        ...homeFilter,
        modalOpen: true,
      },
    });
  };

export const closeHomeModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { homeFilter } = getState().news;
    dispatch({
      type: SET_HOME_FILTER,
      payload: {
        ...homeFilter,
        modalOpen: false,
      },
    });
  };

export const openScrapModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { scrapFilter } = getState().news;
    dispatch({
      type: SET_SCRAP_FILTER,
      payload: {
        ...scrapFilter,
        modalOpen: true,
      },
    });
  };

export const closeScrapModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { scrapFilter } = getState().news;
    dispatch({
      type: SET_SCRAP_FILTER,
      payload: {
        ...scrapFilter,
        modalOpen: false,
      },
    });
  };

export const setCurrentPage = (newPage: Page) => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: newPage,
  });
};

export const setHomeFilter =
  (newHomeFilter: Filter) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_HOME_FILTER,
      payload: newHomeFilter,
    });
  };

export const setScrapFilter =
  (newScrapFilter: Filter) => (dispatch: Dispatch) => {
    dispatch({
      type: SET_SCRAP_FILTER,
      payload: newScrapFilter,
    });
  };

export const addScrap = (article: Article) => (dispatch: Dispatch) => {
  dispatch({ type: SET_TOAST_MESSAGE, payload: "스크랩 추가되었습니다" });
  dispatch({ type: SET_IS_TOAST_MESSAGE_ON, payload: true });
  setTimeout(
    () => dispatch({ type: SET_IS_TOAST_MESSAGE_ON, payload: false }),
    800
  );

  const newScrappedArticles: Article[] = [];
  const string = localStorage.getItem("scrappedArticles");
  if (string === null) newScrappedArticles.push(article);
  else newScrappedArticles.push(...JSON.parse(string), article);

  localStorage.setItem("scrappedArticles", JSON.stringify(newScrappedArticles));
};

export const deleteScrap = (article: Article) => (dispatch: Dispatch) => {
  dispatch({ type: SET_TOAST_MESSAGE, payload: "스크랩 삭제되었습니다" });
  dispatch({ type: SET_IS_TOAST_MESSAGE_ON, payload: true });
  setTimeout(
    () => dispatch({ type: SET_IS_TOAST_MESSAGE_ON, payload: false }),
    800
  );

  const string = localStorage.getItem("scrappedArticles") as string;
  const prevScrappedArticles: Article[] = JSON.parse(string);

  const newScrappedArticles: Article[] = prevScrappedArticles.filter(
    (a) => a._id !== article._id
  );

  localStorage.setItem("scrappedArticles", JSON.stringify(newScrappedArticles));
};

export const setScrapPageStateLoaded =
  (isLoaded: boolean) => (dispatch: Dispatch) => {
    dispatch({ type: SET_SCRAP_PAGE_STATE_LOADED, payload: isLoaded });
  };

// Initial State
const initialState: NewsState = {
  currentPage: "home",
  homeArticles: [],
  homeFilter: {
    modalOpen: false,
    headline: "",
    date: "",
    country: [],
  },
  scrapFilter: {
    modalOpen: false,
    headline: "",
    date: "",
    country: [],
  },
  scrapPageStateLoaded: false,
  isToastMessageOn: false,
  toastMessage: "",
};

// Reducer
const newsReducer = (state: NewsState = initialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_HOME_ARTICLES:
      return {
        ...state,
        homeArticles: action.payload,
      };
    case SET_HOME_FILTER:
      return {
        ...state,
        homeFilter: action.payload,
      };
    case SET_SCRAP_FILTER:
      return {
        ...state,
        scrapFilter: action.payload,
      };
    case SET_SCRAP_PAGE_STATE_LOADED:
      return {
        ...state,
        scrapPageStateLoaded: action.payload,
      };
    case SET_IS_TOAST_MESSAGE_ON:
      return {
        ...state,
        isToastMessageOn: action.payload,
      };
    case SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
