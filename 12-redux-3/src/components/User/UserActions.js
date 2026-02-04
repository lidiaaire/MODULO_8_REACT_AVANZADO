// Definicion de los actions

export const MODIFY_USERNAME = "MODIFY_USERNAME";

// Creacion de los actions

export const modifyUserName = (payload) => {
  return {
    type: MODIFY_USERNAME,
    payload,
  };
};
