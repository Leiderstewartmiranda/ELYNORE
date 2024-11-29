import { ProductsModel } from "../models/ProductsModel.js";

export const getProducts = async (req, res) =>
  res.send(await ProductsModel.find());

export const createProduct = async (req, res) => {
  const resultado = await ProductsModel.insertMany([req.body]);
  res.send(resultado);
};

export const editProduct = async (req, res) => {
  const { imagen, titulo, descripcion, precio, sexo, isFollowing } = req.body;
  const id = parseInt(req.params.id);
  const product = {
    _id: id,
    imagen: imagen,
    titulo: titulo,
    descripcion: descripcion,
    precio: precio,
    sexo: sexo,
    isFollowing: isFollowing,
  };

  const resultado = await ProductsModel.updateOne(
    { _id: id },
    { $set: product }
  );
  res.send(resultado);
};

export const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);

  const resultado = await ProductsModel.deleteOne({ _id: id });
  res.send(resultado);
};
