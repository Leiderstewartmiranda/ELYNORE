export const editProduct = async (id, producto) => {
  try {
    const productos = await fetch(`http://127.0.0.1:3000/editProduct/${id}`, {
      method: "PUT",
      body: producto,
    });
    return await productos.json();
  } catch (error) {
    console.log(error);
  }
};
