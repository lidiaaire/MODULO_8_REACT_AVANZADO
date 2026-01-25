import React, { useEffect, useState } from "react";

// El objetivo de este Hook es conocer si el usuario esta o NO authenticado

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  const getAuthFromBack = () => {
    // Peticion al back que nos da si el usuario esta authenticado
    return true;
  };

  useEffect(() => {
    const isAuxAuth = getAuthFromBack();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsAuth(isAuxAuth);
  }, []);

  return { isAuth };
}
