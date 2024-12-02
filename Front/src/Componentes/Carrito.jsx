import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CartaCarrito from "./CartaCarrito";
import { limpiarCarrito } from "../Redux/Reducers/sliceCarrito";

const Formulario = ({ show, setShow }) => {
  const { productosDelCarrito, precioTotal } = useSelector(
    (state) => state.carrito
  );
  const dispatch = useDispatch();

  const handleLimpiarCarrito = () => {
    dispatch(limpiarCarrito());
  };

  return (
    <>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          {productosDelCarrito.map((item, index) => (
            <CartaCarrito key={index} producto={item} accion={dispatch} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <span>${precioTotal}</span>
          <Button variant="danger" onClick={handleLimpiarCarrito}>
            Limpiar carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Formulario;
