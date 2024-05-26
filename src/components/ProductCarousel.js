import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = () => {
  const [products, setProducts] = useState([
    {
      "id": 1,
      "name": "+PODER",
      "image": "../media/mockupsBRAgro/+PODER.png"
    },
    {
      "id": 2,
      "name": "AGROCAL",
      "image": "../media/mockupsBRAgro/AGROCAL.png"
    },
    {
      "id": 3,
      "name": "ALGAXEN",
      "image": "../media/mockupsBRAgro/ALGAXEN.png"
    },
    {
      "id": 4,
      "name": "MAXI ENGORDE",
      "image": "../media/maxiEngorde.png"
    },
    {
      "id": 5,
      "name": "BIOARRANKE 8-24",
      "image": "../media/bioarranke824.png"
    },
    {
      "id": 7,
      "name": "AMINEX",
      "image": "../media/mockupsBRAgro/AMINEX.png"
    },
    {
      "id": 8,
      "name": "BIOACTIVOGD",
      "image": "../media/mockupsBRAgro/BIOACTIVOGD.png"
    },
    {
      "id": 9,
      "name": "BIOCIN",
      "image": "../media/mockupsBRAgro/BIOCIN.png"
    },
    {
      "id": 10,
      "name": "BIOGAR",
      "image": "../media/mockupsBRAgro/BIOGAR.png"
    },
    {
      "id": 11,
      "name": "BIOTEK MICROS",
      "image": "../media/mockupsBRAgro/BIOTEK-MICROS.png"
    },
  ]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <p style={{textAlign:"center"}}>{product.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProductCarousel;
