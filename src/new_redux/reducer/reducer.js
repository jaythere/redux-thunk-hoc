const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state?.count + (action?.payload ? action.payload : 1),
      };
    case "DECREMENT":
      return {
        ...state,
        count: state?.count - (action?.payload ? action.payload : 1),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
