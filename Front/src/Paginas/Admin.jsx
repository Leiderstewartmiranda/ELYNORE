import React, { useState, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  listarProductos,
  removeProduct,
} from "../Redux/Reducers/sliceProductos";
import { Button, Table } from "react-bootstrap";
import { Pencil, PlusCircle, Trash } from "react-bootstrap-icons";
import FormularioCrear from "../Componentes/FormularioCrear";
import FormularioActualizar from "../Componentes/FormularioActualizar";

export const Admin = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [producto, setProducto] = useState(null);

  const { estado, productos } = useSelector((state) => state.productos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (estado === "idle") {
      dispatch(listarProductos());
    }
  }, [estado, dispatch]);

  const handleUptadeProduct = (producto) => {
    setProducto(producto);
    setShowUpdate(true);
  };

  return (
    <>
      <h1>Productos</h1>
      <section>
        <article className="button_productos">
          <Button
            variant="success"
            onClick={() => setShowCreate(true)}
            className="button_iterno_productos"
          >
            <PlusCircle size={19} color="white" /> Agregar producto
          </Button>
        </article>
        <article>
          <Table striped>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Sexo</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((item, index) => (
                <tr key={index}>
                  <td>{item.titulo}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.precio}</td>
                  <td>{item.sexo}</td>
                  <td className="button_tabla">
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleUptadeProduct(item)}
                    >
                      <Pencil size={16} color="white" />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => dispatch(removeProduct(item._id))}
                    >
                      <Trash size={16} color="white" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </article>
      </section>
      <FormularioCrear showCreate={showCreate} setShowCreate={setShowCreate} />
      <FormularioActualizar
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
        producto={producto}
      />
    </>
  );
};
