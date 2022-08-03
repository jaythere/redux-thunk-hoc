const increment = {
  type: "INCREMENT",
  payload: 1,
};

const decrement = {
  type: "DECREMENT",
  payload: 1,
};

const incrementCreator = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

const decrementCreator = (payload) => {
  return {
    type: "DECREMENT",
    payload,
  };
};

const incrementThunkCreator = (payload) => {
  return (dispatch) => {
    console.log("called thunk");
    const currentTime = new Date().getTime();
    /** Mocking - can have api calls */
    setTimeout(() => {
      console.log(
        "called thunk again after seconds ",
        new Date().getTime() - currentTime
      );
      dispatch(incrementCreator(payload));
    }, 3000);
  };
};

export {
  increment,
  decrement,
  incrementCreator,
  decrementCreator,
  incrementThunkCreator,
};
