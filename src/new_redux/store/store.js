import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/reducer";

const initialState = {
  count: 1,
};

const store = configureStore({
  reducer: {
    counter: reducer,
  },
  initialState,
});

export default store;
