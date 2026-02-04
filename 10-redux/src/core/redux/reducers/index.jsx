import counterReducer from "@/components/Counter/CounterReducers";
import { combineReducers } from "redux";

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
