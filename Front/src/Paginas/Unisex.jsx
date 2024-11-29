import React, { useEffect } from "react";
//Tarjetas
import Card from "../Componentes/Card";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { listarProductos } from "../Redux/Reducers/sliceProductos";

export function Unisex() {
  const { estado, productos } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (estado === "idle") {
      dispatch(listarProductos());
    }
  }, [estado, dispatch]);

  return (
    <>
      <h1>Unisex</h1>
      <section className="cards">
        {productos.length == 0 ? <span>Cargando...</span> : ""}
        {productos
          .map((card, index) => <Card key={index} card={card} />)
          .filter((item) => item.props.card.sexo == "Unisex")}
      </section>
    </>
  );
}
