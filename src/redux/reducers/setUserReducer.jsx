const initial = {
  user: {},
};

export const setUserReducer = (state = initial, action) => {
  switch (action.payload) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
