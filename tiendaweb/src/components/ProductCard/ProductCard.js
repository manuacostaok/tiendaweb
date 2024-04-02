import React from 'react';

const ProductCard = ({ product }) => {
  // Verifica si el producto está definido antes de desestructurar sus propiedades
  if (!product) {
    return <div>No se ha proporcionado ningún producto</div>;
  }

  const { name, price, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      {/* Agrega aquí cualquier otra lógica o elementos que desees renderizar */}
    </div>
  );
};

export default ProductCard;