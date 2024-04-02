import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../ProductCard/ProductCard'; // Importa el componente ProductCard

// Supongamos que tienes un array de objetos que representan los datos de los productos
const products = [
  { id: 1, name: 'Producto 1', price: 10, imageUrl: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Producto 2', price: 20, imageUrl: 'https://images.pexels.com/photos/8983132/pexels-photo-8983132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Producto 3', price: 10, imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, name: 'Producto 4', price: 20, imageUrl: 'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  // Agrega más objetos de productos según sea necesario
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="home">
      <h2>Productos Destacados</h2>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;