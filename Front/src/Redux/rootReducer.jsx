import { combineReducers } from "@reduxjs/toolkit";
import sliceProductos from "./Reducers/sliceProductos";

export const rootReducer = combineReducers({
  productos: sliceProductos,
});
