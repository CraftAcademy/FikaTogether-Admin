const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIKA_INDEX":
      return {
        ...state,
        ...action.payload,
      };
  }
};
export default rootReducer;
