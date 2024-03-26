export const ADD_TO_PREF = "ADD_TO_PREF";
export const DELETE_FROM_PREF = "DELETE_FROM_PREF";

export const addToPref = (Preferito) => {
  return {
    type: ADD_TO_PREF,
    payload: Preferito,
  };
};

// non siamo obbligati ad utilizzare le funzioni freccia
export const deleteFromPref = function (i) {
  return {
    type: DELETE_FROM_PREF,
    payload: i,
  };
};
