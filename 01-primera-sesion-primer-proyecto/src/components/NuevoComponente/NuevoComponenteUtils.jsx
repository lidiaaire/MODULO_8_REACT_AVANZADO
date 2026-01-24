export const calcularPrecioTotal = (productos) => {
  let sum = 0;
  productos.forEach((value, index, array) => {
    sum = sum + value.precio;
  });

  return sum;
};
