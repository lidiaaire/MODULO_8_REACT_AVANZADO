import { DECREMENTAR_EN_UNO, INCREMENTAR_EN_UNO } from "./CounterActions";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENTAR_EN_UNO:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENTAR_EN_UNO:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
