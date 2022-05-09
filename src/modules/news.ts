import { Dispatch } from "redux";
import { Page } from "../interfaces";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface NewsState {
  currentPage: Page;
  isModalOn: boolean;
}

// Action Types
const SET_IS_MODAL_ON = "SET_IS_MODAL_ON";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

// Action Creators
export const initStore = () => async (dispatch: Dispatch) => {
  // dispatch({ type: SET_IS_MODAL_ON, payload: true });
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
  isModalOn: false,
};

// Reducer
const newsReducer = (state: NewsState = initialState, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_IS_MODAL_ON:
      return {
        ...state,
        isModalOn: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
