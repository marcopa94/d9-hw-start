const initialState = {
  pref: {
    content: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_PREF":
      return {
        ...state,
        pref: {
          ...state.pref,
          content: state.pref.content.concat(action.payload),
        },
      };
    case "DELETE_FROM_PREFERITI":
      return {
        ...state,
        pref: {
          ...state.pref,
          content: state.pref.content.filter((item, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
