import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//APIs
import { getProducts } from "../../APIs/getProducts";
import { createProduct } from "../../APIs/createProduct";
import { editProduct } from "../../APIs/editProduct";
import { deleteProduct } from "../../APIs/deleteProduct";

const initialState = {
  estado: "idle",
  productos: [],
};

const sliceProductos = createSlice({
  name: "Productos",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      createProduct(action.payload);
      state.estado = "idle";
    },
    updateProduct: (state, action) => {
      const { id } = action.payload.producto;
      editProduct(id, action.payload);
      state.estado = "idle";
    },
    removeProduct: (state, action) => {
      const { id } = action.payload.producto;
      deleteProduct(id);
      state.estado = "idle";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(listarProductos.fulfilled, (state, action) => {
        state.productos = action.payload;
        state.estado = "succeeced";
        console.log(state.productos);
      })
      .addCase(listarProductos.pending, (state, action) => {
        state.estado = "pending";
      })
      .addCase(listarProductos.rejected, (state, action) => {
        state.estado = "failed";
      }),
});

export const listarProductos = createAsyncThunk(
  "listarProductos",
  async () => await getProducts()
);

export default sliceProductos.reducer;
export const { addProduct, updateProduct, removeProduct } =
  sliceProductos.actions;
