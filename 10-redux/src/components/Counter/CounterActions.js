//Actions:

export const INCREMENTAR_EN_UNO = "INCREMENTAR_EN_UNO";
export const DECREMENTAR_EN_UNO = "DECREMENTAR_EN_UNO";

//Funciones que crean las actions:

// export const increment = () => ({
//   type: INCREMENTAR_EN_UNO,
//   payload: 1,
// });

// AMBAS SON VALIDAS
export const increment = () => {
  return {
    type: INCREMENTAR_EN_UNO,
    payload: 1,
  };
};

export const decrement = () => {
  return {
    type: DECREMENTAR_EN_UNO,
    payload: 1,
  };
};
