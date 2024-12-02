import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import {
  agregarAlCarrito,
  eliminarDelCarrito,
} from "../Redux/Reducers/sliceCarrito";

const CartaCarrito = ({ producto, accion }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cantidad: {producto.cantidad}</ListGroup.Item>
        <ListGroup.Item>Precio: {producto.precio}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="text-center">
        <Button
          className="bg-success mx-2 border-0"
          onClick={() => accion(agregarAlCarrito(producto))}
        >
          Aumentar
        </Button>
        <Button
          className="bg-danger mx-2 border-0"
          onClick={() => accion(eliminarDelCarrito(producto))}
        >
          Disminuir
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartaCarrito;
