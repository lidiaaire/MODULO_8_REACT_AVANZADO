import { combineReducers } from "redux";
import counterReducer from "../../../components/Counter/CounterReducer";
import userReducer from "../../../components/User/UserReducer";

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default reducer;
