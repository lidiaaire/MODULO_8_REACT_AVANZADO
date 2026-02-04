import { legacy_createStore as createStore } from "redux";
import reducer from "../reducers";

export const store = createStore(reducer);

store.subscribe(() => {});

export default store;
