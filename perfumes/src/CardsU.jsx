import React, {useState} from 'react'
import './proyec.css'

const Card = ({card}) => {
    const [botonActivo, setBotonActivo] = useState(false);
    const handleClick = () => {setBotonActivo(!botonActivo);
    };
   
    return(
        
            <div className="card">
                <img src={card.imagen} alt={card.titulo} />
                <h3>{card.nombre}</h3>
                <p>{card.precio}</p>
                <div className="boton">
                    <p>${card.precio}</p>
                    <button className={botonActivo ? 'boton-elimi' : 'boton-agg'} onClick={handleClick}>{botonActivo ? 'ELIMINAR' : 'AGREGAR'}</button>
                </div>
            </div>
    
    )
}

export default Card
