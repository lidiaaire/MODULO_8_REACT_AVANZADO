import { MODIFY_USERNAME } from "./UserActions";

const initialState = {
  username: "lidi",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default userReducer;
