import React, {useState} from 'react'
import './proyec.css'

const Card = ({card}) => {
   
    return(
        
            <div className="card">
                <img src={card.imagen} alt={card.titulo} />
                <h3>{card.nombre}</h3>
                <p>{card.precio}</p>
              
            </div>
    
    )
}

export default Card
