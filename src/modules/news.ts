import { Dispatch } from "redux";
import { RootState } from ".";
import { Modal, Page } from "../interfaces";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface NewsState {
  currentPage: Page;
  homeModal: Modal;
  scrapModal: Modal;
}

// Action Types
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_HOME_MODAL = "SET_HOME_MODAL";
const SET_SCRAP_MODAL = "SET_SCRAP_MODAL";

// Action Creators
export const openHomeModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { homeModal } = getState().news;
    dispatch({
      type: SET_HOME_MODAL,
      payload: {
        ...homeModal,
        open: true,
      },
    });
  };

export const closeHomeModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { homeModal } = getState().news;
    dispatch({
      type: SET_HOME_MODAL,
      payload: {
        ...homeModal,
        open: false,
      },
    });
  };

export const openScrapModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { scrapModal } = getState().news;
    dispatch({
      type: SET_SCRAP_MODAL,
      payload: {
        ...scrapModal,
        open: true,
      },
    });
  };

export const closeScrapModal =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { scrapModal } = getState().news;
    dispatch({
      type: SET_SCRAP_MODAL,
      payload: {
        ...scrapModal,
        open: false,
      },
    });
  };

export const setCurrentPage = (newPage: Page) => async (dispatch: Dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: newPage,
  });
};

// Initial State
const initialState: NewsState = {
  currentPage: "home",
  homeModal: {
    open: false,
    currentHeadLine: "",
    currentDate: "",
    currentCountry: "",
  },
  scrapModal: {
    open: false,
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
    case SET_HOME_MODAL:
      return {
        ...state,
        homeModal: action.payload,
      };
    case SET_SCRAP_MODAL:
      return {
        ...state,
        scrapModal: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
