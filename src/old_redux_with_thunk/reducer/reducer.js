const initialState = {
  count: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state?.count + Number(action?.payload ? action.payload : 1),
      };
    case "DECREMENT":
      return {
        ...state,
        count: state?.count - Number(action?.payload ? action.payload : 1),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
