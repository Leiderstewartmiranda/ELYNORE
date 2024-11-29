export const deleteProduct = async (id) => {
  try {
    const productos = await fetch(`http://127.0.0.1:3000/editProduct/${id}`);
    return await productos.json();
  } catch (error) {
    console.log(error);
  }
};
