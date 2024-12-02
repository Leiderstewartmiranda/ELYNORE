import React, { useState } from "react";
//Estilos
import "../proyec.css";
import { useDispatch } from "react-redux";
import { agregarAlCarrito } from "../Redux/Reducers/sliceCarrito";

const Card = ({ card }) => {
  const [botonActivo, setBotonActivo] = useState(false);
  const handleClick = () => {
    dispatch(agregarAlCarrito(card));
    setBotonActivo(true);
  };

  const dispatch = useDispatch();

  return (
    <div className="carta">
      <img src={card.imagen} alt={card.titulo} />
      <h3>{card.titulo}</h3>
      <div className="boton">
        <p>${card.precio}</p>
        <button
          className={botonActivo ? "boton-elimi" : "boton-agg"}
          onClick={handleClick}
        >
          {botonActivo ? "AGREGADO" : "AGREGAR"}
        </button>
      </div>
    </div>
  );
};

export default Card;
