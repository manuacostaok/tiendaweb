import React from 'react';
import './Cart.css';

const Cart = ({ removeProductFromCart }) => {
  // Suponiendo que removeProductFromCart es una función que elimina un producto del carrito
  const products = []; // Esto debería ser un array con los productos del carrito

  // Calcular el total de la compra
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="cart">
      <h3>Carrito de Compras</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => removeProductFromCart(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>Total: ${totalPrice}</div>
      <button>Comprar</button>
    </div>
  );
};

export default Cart;