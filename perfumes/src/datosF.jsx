import React from 'react'
import Card from  './CardsF.jsx'

const cardData=[
    {
        id: 1,
        imagen: 'https://imgs.search.brave.com/P6vP_6dqJNBFU86XqCkVR3RvTw45eUxZFKGNfqp0c8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maW1n/cy5uZXQvbWRpbWcv/cGVyZnVtZS8zNzV4/NTAwLjQ3MjU1Lmpw/Zw', // URL de la imagen
        titulo: 'Card 1',
        nombre: 'Sorbetto Rosso',
        precio: '150',
        isFollowing: true,
      },
      {
        id: 2,
        imagen: 'https://imgs.search.brave.com/p0HSBjyn95c5T7CxjKPLJNg0iVq4X-su7ZLTqwfEWQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ka29s/b3B3anFhcmNwLmNs/b3VkZnJvbnQubmV0/L0N1c3RvbS9Db250/ZW50L1Byb2R1Y3Rz/LzExLzkxLzExOTEw/X3BlcmZ1bWUtcGFj/by1yYWJhbm5lLWxh/ZHktbWlsbGlvbi1l/YXUtZGUtcGFyZnVt/LWZlbWluaW5vLW1f/bTFfNjM4MTAzMjk3/MTA4NzM5NDA0Lndl/YnA', // URL de la imagen
        titulo: 'Card 2',
        nombre: 'One million fem',
        precio: '100',
        isFollowing: true
      },
      {
        id: 3,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 3',
        nombre: '',
        precio: '100',
        isFollowing: true
      },
      {
        id: 4,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 4',
        nombre: 'Acqua di Gio',
        precio: '100',
        isFollowing: true
      },
      
];
export function CardListM () {
  return (
    <section className="cards">
      {cardData.map((card) => 
        <Card 
          key={card.id} 
          imagen={card.imagen} 
          title={card.titulo} 
          nombre={card.nombre} 
          precio={card.precio}
          card={card}
        />
      )}
    </section>
  );
};
