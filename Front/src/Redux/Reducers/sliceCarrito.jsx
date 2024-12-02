import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productosDelCarrito: [],
  precioTotal: 0,
};

const sliceCarrito = createSlice({
  name: "Carrito",
  initialState,
  reducers: {
    agregarAlCarrito: (state, action) => {
      const producto = { ...action.payload };
      const productoExistente = state.productosDelCarrito.find(
        (item) => item._id == producto._id
      );

      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        producto.cantidad = 1;
        state.productosDelCarrito.push(producto);
      }
      state.precioTotal += producto.precio || productoExistente.precio;
    },
    eliminarDelCarrito: (state, action) => {
      const producto = { ...action.payload };
      const productoExistente = state.productosDelCarrito.find(
        (item) => item._id == producto._id
      );

      if (productoExistente.cantidad > 1) {
        productoExistente.cantidad -= 1;
      } else {
        const index = state.productosDelCarrito.indexOf(producto);
        state.productosDelCarrito.splice(index, 1);
      }
      state.precioTotal -= productoExistente.precio;
    },
    limpiarCarrito: (state, action) => {
      state.productosDelCarrito = initialState.productosDelCarrito;
      state.precioTotal = initialState.precioTotal;
    },
  },
});

export default sliceCarrito.reducer;
export const { agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } =
  sliceCarrito.actions;

//---Carrito de compras---
//Agregar un producto o existencia
//Eliminar un productos o existencia
//Limpiar el carrito
