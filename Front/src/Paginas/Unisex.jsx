import React, { useState, useEffect } from "react";
//Tarjetas
import Card from "../Componentes/Card";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { listarProductos } from "../Redux/Reducers/sliceProductos";
import { Cart } from "react-bootstrap-icons";
import Carrito from "../Componentes/Carrito";

export function Unisex() {
  const [show, setShow] = useState(false);

  const { estado, productos } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (estado === "idle") {
      dispatch(listarProductos());
    }
  }, [estado, dispatch]);

  return (
    <>
      <section className="seccion_titulo">
        <h1>Unisex</h1>
        <Cart size={50} className="carrito" onClick={() => setShow(true)} />
      </section>
      <section className="cards">
        {productos.length == 0 ? <span>Cargando...</span> : ""}
        {productos
          .map((card, index) => <Card key={index} card={card} />)
          .filter((item) => item.props.card.sexo == "Unisex")}
      </section>
      <Carrito show={show} setShow={setShow} />
    </>
  );
}
