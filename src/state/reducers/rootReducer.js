const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIKA_INDEX":
      return {
        ...state,
        fikas: action.payload,
      };
    case "SET_DEPARTMENT_INDEX":
      return {
        ...state,
        departments: action.payload,
      };
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        authenticated: true,
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        appLanguage: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
