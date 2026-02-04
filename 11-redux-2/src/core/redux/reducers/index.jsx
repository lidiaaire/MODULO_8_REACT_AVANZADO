import comicReducer from "@/components/Comics/ComicsReducers";
import { combineReducers } from "redux";

export default combineReducers({
  comics: comicReducer,
});
