import { Dispatch } from "redux";

// Interfaces
interface Action {
  type: string;
  payload: [];
}

export interface NewsState {
  isModalOn: boolean;
}

// Action Types
const SET_IS_MODAL_ON = "SET_IS_MODAL_ON";

// Action Creators
export const initStore = () => async (dispatch: Dispatch) => {
  // dispatch({ type: SET_IS_MODAL_ON, payload: true });
};

// Initial State
const initialState: NewsState = {
  isModalOn: false,
};

// Reducer
const newsReducer = (state: NewsState = initialState, action: Action) => {
  switch (action.type) {
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
