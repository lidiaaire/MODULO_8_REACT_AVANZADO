import { ADD_COMIC, MODIFY_COMIC, REMOVE_COMIC } from "./ComicsAction";

const initialState = {
  comics: [],
};

const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMIC:
      return {
        ...state,
        comics: [
          ...state.comics,
          {
            isbn: action.payload.isbn,
            nombre: action.payload.nombre,
            autor: action.payload.autor,
          },
        ],
      };
    case MODIFY_COMIC:
      return {};
    case REMOVE_COMIC:
      return {};
    default:
      return state;
  }
};

export default comicReducer;
