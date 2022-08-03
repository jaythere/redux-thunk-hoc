import { createStore } from "redux";
import reducer from "../reducer/reducer";

const initialState = {
  count: 1,
};

const store = createStore(reducer, initialState);

export default store;
