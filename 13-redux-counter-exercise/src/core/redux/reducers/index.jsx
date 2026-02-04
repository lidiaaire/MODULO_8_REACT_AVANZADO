import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducer = combineReducers({
  contador: counterReducer,
});

export default reducer;
