import userReducer from "@/components/User/UserReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  user: userReducer,
});

export default reducer;
