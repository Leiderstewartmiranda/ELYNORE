import React from 'react'
import Card from  './CardsF.jsx'

const cardData=[
    {
        id: 1,
        imagen: 'https://imgs.search.brave.com/SZGXQU7R4IXAt_2YJmNNSbxXPfJ21HKxw5iAC2bZPuA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxaEcrVmtwZWdT/LmpwZw', // URL de la imagen
        titulo: 'Card 1',
        nombre: 'Paris hilton love rush',
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
        imagen: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1676714913-5676.jpg?crop=1xw:1.00xh;center,top&resize=980:*', // URL de la imagen
        titulo: 'Card 3',
        nombre: 'Dior Miss Dior',
        precio: '100',
        isFollowing: true
      },
      {
        id: 4,
        imagen: 'https://imgs.search.brave.com/e8rPRYDv0f9mb_jnc-qKniv_v3yNUSi34Ch2wbBs964/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLm1h/a2V1cC5lcy95L3k5/L3k5ZzB6aHF5bXF3/eS5qcGc', // URL de la imagen
        titulo: 'Card 4',
        nombre: 'Dahab Kajal',
        precio: '100',
        isFollowing: true
      },
          {
        id: 5,
        imagen: 'https://farmaciaspatagonicasar.vtexassets.com/arquivos/ids/157307/8435415049542lata.jpg?v=638017167817930000', // URL de la imagen
        titulo: 'Card 5',
        nombre: 'Jean Paul Gaultier',
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
