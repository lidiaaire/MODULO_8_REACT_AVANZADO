//Definimos las acciones

export const ADD_COMIC = "ADD_COMIC";
export const MODIFY_COMIC = "MODIFY_COMIC";
export const REMOVE_COMIC = "REMOVE_COMIC";

// Creamos las acciones
export const addComic = (payload) => {
  return {
    type: ADD_COMIC,
    payload,
  };
};

export const modifyComic = (payload) => {
  return {
    type: MODIFY_COMIC,
    payload,
  };
};

export const removeComic = (payload) => {
  return {
    type: REMOVE_COMIC,
    payload,
  };
};
