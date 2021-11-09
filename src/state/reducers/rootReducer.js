const rootReducer = (state, action) => {
  return {
    ...state,
    ...action.payload
  };
}
export default rootReducer;