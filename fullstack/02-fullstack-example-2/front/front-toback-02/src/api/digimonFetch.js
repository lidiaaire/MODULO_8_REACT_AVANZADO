export const getAllDigimons = async () => {
  // peticion al back
  const response = await fetch("http://localhost:9000/digimons");
  const digimons = await response.json();
  return digimons;
};
