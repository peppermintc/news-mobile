import { combineReducers } from "redux";
import newsReducer, { NewsState } from "./news";

export interface RootState {
  news: NewsState;
}

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
