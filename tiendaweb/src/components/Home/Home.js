import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard/ProductCard';

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
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        {/* Agrega más ProductCards según sea necesario */}
      </Slider>
    </div>
  );
};

export default Home;