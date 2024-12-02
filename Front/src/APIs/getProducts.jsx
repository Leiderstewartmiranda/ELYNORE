export const getProducts = async () => {
  try {
    const productos = await fetch("http://127.0.0.1:3000/getProducts");
    return await productos.json();
  } catch (error) {
    console.log(error);
  }
};
