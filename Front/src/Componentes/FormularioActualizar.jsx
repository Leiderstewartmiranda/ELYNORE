import React, { useEffect, useState, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
//redux
import { useDispatch } from "react-redux";
import { updateProduct } from "../Redux/Reducers/sliceProductos";

const FormularioActualizar = ({ showUpdate, setShowUpdate, producto }) => {
  //useRef
  const imageRef = useRef(null);
  const tituloRef = useRef(null);
  const descripcionRef = useRef(null);
  const precioRef = useRef(null);
  const sexoRef = useRef(null);

  //Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (producto) {
      imageRef.current.value = producto.imagen;
      tituloRef.current.value = producto.titulo;
      descripcionRef.current.value = producto.descripcion;
      precioRef.current.value = producto.precio;
      sexoRef.current.value = producto.sexo;
    }
  }, [producto]);

  const handleValidateForm = () => {
    if (
      imageRef.current.value == "" ||
      !imageRef.current.value.startsWith("https")
    ) {
      return alert("La imagen es obligatoria y y debe ser una ruta valida");
    }

    if (tituloRef.current.value == "") {
      return alert("El titulo es obligatoria");
    }

    if (descripcionRef.current.value == "") {
      return alert("La discripcion es obligatoria");
    }

    if (precioRef.current.value == "" || precioRef.current.value == null) {
      return alert("El precio es obligatorio");
    }

    if (sexoRef.current.value == "Default")
      return alert("El tipo de ropa es obligatorio");

    const productoActualizar = {
      _id: producto._id,
      imagen: imageRef.current.value,
      titulo: tituloRef.current.value,
      descripcion: descripcionRef.current.value,
      precio: precioRef.current.value,
      sexo: sexoRef.current.value,
    };

    dispatch(updateProduct(productoActualizar));
    setShowUpdate(false);

    imageRef.current.value = null;
    tituloRef.current.value = null;
    descripcionRef.current.value = null;
    precioRef.current.value = null;
    sexoRef.current.value = null;
  };

  return (
    <>
      <Modal show={showUpdate} onHide={() => setShowUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="mb-3">
            <Form.Label htmlFor="imagen">Imagen</Form.Label>
            <input
              type="text"
              id="imagen"
              ref={imageRef}
              className="form-control"
              placeholder="Ingrese la url de la imagen"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="titulo">Titulo</Form.Label>
            <input
              type="text"
              id="titulo"
              ref={tituloRef}
              className="form-control"
              placeholder="Ingrese el titulo"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="descripcion">Descripcion</Form.Label>
            <input
              type="text"
              id="descripcion"
              ref={descripcionRef}
              className="form-control"
              placeholder="Ingrese una descripcion"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="precio">Precio</Form.Label>
            <input
              type="number"
              id="precio"
              ref={precioRef}
              className="form-control"
              placeholder="Ingrese el precio"
            />
          </section>

          <section className="mb-3">
            <Form.Label htmlFor="precio">Sexo</Form.Label>
            <Form.Select id="precio" ref={sexoRef}>
              <option value="Default">Digite el tipo de prenda</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Unisex">Unisex</option>
            </Form.Select>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleValidateForm}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioActualizar;
