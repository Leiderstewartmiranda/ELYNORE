import { combineReducers } from "@reduxjs/toolkit";
import sliceProductos from "./Reducers/sliceProductos";
import sliceCarrito from "./Reducers/sliceCarrito";

export const rootReducer = combineReducers({
  productos: sliceProductos,
  carrito: sliceCarrito,
});
