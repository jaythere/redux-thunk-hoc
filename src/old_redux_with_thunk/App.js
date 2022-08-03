import { useEffect, useState } from "react";
import {
  decrement,
  decrementCreator,
  increment,
  incrementCreator,
  incrementThunkCreator,
} from "./action/action";
import { connect, Provider } from "react-redux";
import store from "./store/store";

function ReduxApp(props) {
  const [text, setText] = useState(1);

  useEffect(() => {
    console.log("logging from old_redux_with_thunk", store);
    console.log("getState", store.getState());
    // can trigger increment by calling dispatch method directly
    /*
    store.dispatch(increment);
    console.log("getState", store.getState());
    */
  }, [text]);

  const onChangeText = (e) => {
    setText(e.currentTarget.value);
  };

  const { count } = props;

  return (
    <div className="App">
      <div>{`Counter Value ${count}`}</div>
      <button onClick={props.increment}>Increment By 1</button>
      <button onClick={() => props.incrementThunkCreator(1)}>
        Increment By 1 Using Thunk
      </button>
      <button onClick={props.decrement}>Decrement By 1</button>
      <input type="text" onChange={onChangeText} value={text} />
      <button onClick={() => props.incrementCreator(text)}>
        Increment By ${text}
      </button>
      <button onClick={() => props.decrementCreator(text)}>
        Decrement By ${text}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
    incrementCreator: (payload) => dispatch(incrementCreator(payload)),
    decrementCreator: (payload) => dispatch(decrementCreator(payload)),
    incrementThunkCreator: (payload) =>
      dispatch(incrementThunkCreator(payload)),
  };
};

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
const App = () => {
  return (
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  );
};

export default App;
