export const getAllDigimons = async () => {
  // peticion al back
  const response = await fetch("http://localhost:9000/digimons");
  const digimons = await response.json();
  return digimons.data;
};

export const getDigimon = async (id) => {
  const response = await fetch(`http://localhost:9000/digimons/${id}`);
  const result = await response.json();
  return result.data;
};

export const deleteDigimon = async (id) => {
  const response = await fetch(`http://localhost:9000/digimons/${id}`, {
    method: "DELETE",
  });

  const digimonDelete = await response.json();

  if (digimonDelete.error) console.log(digimonDelete.error);
  console.log("todo fue bien");
  return;
};

export const updateDigimon = async (id, bodyParam) => {
  const response = await fetch(`http://localhost:9000/digimons/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParam),
  });

  const digimonUpdated = await response.json();
  if (digimonUpdated.error) console.log(digimonUpdated.error);
  console.log(digimonUpdated);
  return;
};

export const createDigimon = async (bodyParam) => {
  const response = await fetch(`http://localhost:9000/digimons/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyParam),
  });

  const digimonCreated = await response.json();
  if (digimonCreated.error) console.log(digimonCreated.error);
  console.log(digimonCreated);
  return;
};
