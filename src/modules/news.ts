import { Dispatch } from "redux";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface NewsState {
  isAppStateReady: boolean;
}

// Action Types
const SET_CATEGORIES = "SET_CATEGORIES";

// Action Creators
export const initStore = () => async (dispatch: Dispatch) => {
  dispatch({ type: SET_CATEGORIES, payload: true });
};

// Initial State
const initialState: NewsState = {
  isAppStateReady: false,
};

// Reducer
const newsReducer = (state: NewsState = initialState, action: Action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        isAppStateReady: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
