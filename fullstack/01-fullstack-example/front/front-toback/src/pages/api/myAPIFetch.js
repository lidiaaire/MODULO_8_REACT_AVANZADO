export const getSaludo = async () => {
  try {
    const response = await fetch("http://localhost:9000/saludo", {
      method: "GET",
    });

    if (!response.ok) console.log("no es OK");
    const saludo = await response.json();
    return saludo;
  } catch (error) {
    console.log(error);
  }
};

export const postSaludo = async () => {
  try {
    const response = await fetch("http://localhost:9000/post-saludo", {
      method: "POST",
    });

    if (!response.ok) console.log("no es OK");
    const saludo = await response.json();
    return saludo;
  } catch (error) {
    console.log(error);
  }
};

export const postSaludoPersona = async (nameParam) => {
  try {
    const response = await fetch("http://localhost:9000/saludar-persona", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameParam,
      }),
    });

    if (!response.ok) throw new Error("no es OK");
    const saludoPersona = await response.json();
    return saludoPersona;
  } catch (error) {
    console.log(error);
  }
};
