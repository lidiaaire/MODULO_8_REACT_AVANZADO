import reducer from "@/core/redux/reducers";
import { legacy_createStore as createStore } from "redux";

const store = createStore(reducer);

store.subscribe(() => {});

export default store;
