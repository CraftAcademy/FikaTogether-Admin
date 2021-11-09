const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIKA_INDEX":
      return {
        ...state,
        fikas: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
