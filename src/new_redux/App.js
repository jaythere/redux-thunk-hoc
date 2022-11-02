import React from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { decrement, increment } from "./reducer/reducer";
import store from "./store/store";

function WrappedApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>New Redux Implementations</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  );
};

export default App;
