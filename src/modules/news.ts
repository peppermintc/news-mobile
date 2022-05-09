import { Dispatch } from "redux";
import { RootState } from ".";
import { Filter, Page } from "../interfaces";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface NewsState {
  currentPage: Page;
  homeFilter: Filter;
  scrapFilter: Filter;
}

// Action Types
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_HOME_FILTER = "SET_HOME_FILTER";
const SET_SCRAP_FILTER = "SET_SCRAP_FILTER";

// Action Creators
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

// Initial State
const initialState: NewsState = {
  currentPage: "home",
  homeFilter: {
    modalOpen: false,
    currentHeadLine: "",
    currentDate: "",
    currentCountry: "",
  },
  scrapFilter: {
    modalOpen: false,
    currentHeadLine: "",
    currentDate: "",
    currentCountry: "",
  },
};

// Reducer
const newsReducer = (state: NewsState = initialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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
    default:
      return state;
  }
};

export default newsReducer;
