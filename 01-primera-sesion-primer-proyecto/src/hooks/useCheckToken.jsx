import React, { useEffect, useState } from "react";

export default function useCheckToken(tokenParam) {
  const [isTokenOk, setIsTokenOk] = useState(false);

  const getCheckTokenFromBack = (TokenOptions) => {
    return true;
  };

  useEffect(() => {
    const tokenAux = getCheckTokenFromBack(tokenParam);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsTokenOk(tokenAux);
  }, []);

  return { isTokenOk };
}
