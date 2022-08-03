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

export { increment, decrement, incrementCreator, decrementCreator };
