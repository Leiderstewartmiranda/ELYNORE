import React from 'react'
import Card from  './CardsH.jsx'

const cardData=[
    {
        id: 1,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 1',
        nombre: 'Jean Pual Gualtier',
        precio: '150',
        isFollowing: true,
      },
      {
        id: 2,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 2',
        nombre: 'Acqua di Gio',
        precio: '100',
        isFollowing: true
      },
      {
        id: 3,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 3',
        nombre: 'Acqua di Gio',
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
      {
        id: 5,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 4',
        nombre: 'Acqua di Gio',
        precio: '100',
        isFollowing: true
      },
      {
        id: 6,
        imagen: '../public/logoPerfumes.jpg', // URL de la imagen
        titulo: 'Card 4',
        nombre: 'Acqua di Gio',
        precio: '100',
        isFollowing: true
      },
];
export function CardListH () {
  return (
    <section className="cards">
      {cardData.map((card) => 
        <Card 
          key={card.id} 
          imagen={card.imagen} 
          title={card.titulo} 
          nombre={card.nombre} 
          precio={card.precio}
          //initialIsFollowing={card.isFollowing} 
          card={card}
        />
      )}
    </section>
  );
};
