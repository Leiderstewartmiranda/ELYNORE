export const createProduct = async (producto) => {
  try {
    const productos = await fetch("http://127.0.0.1:3000/createProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return await productos.json();
  } catch (error) {
    console.log(error);
  }
};
