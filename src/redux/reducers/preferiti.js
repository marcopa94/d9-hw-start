const initialState = {
  content: [],
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_PREF":
      return {
        ...state,

        content: state.content.concat(action.payload),
      };

    case "DELETE_FROM_PREFERITI":
      return {
        ...state,

        content: state.content.filter((item, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;
