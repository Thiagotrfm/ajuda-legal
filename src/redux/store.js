import { createStore } from "redux";
import topBarReducer from "./topBarReducer";

const store = createStore(topBarReducer);

export default store;
