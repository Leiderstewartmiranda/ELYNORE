import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema({
  _id: Number,
  imagen: String,
  titulo: String,
  descripcion: String,
  precio: Number,
  sexo: String,
  isFollowing: Boolean,
});

export const ProductsModel = mongoose.model("products", productsSchema);
