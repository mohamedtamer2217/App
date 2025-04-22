import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroCarousel.css'; // Optional for custom styles

const HeroCarousel = () => {
  const images = [
    '/saluga/1.jpg',
    '/saluga/2.jpg',
    '/saluga/3.jpg',
    '/saluga/4.jpg',
    '/saluga/5.jpg',
    '/saluga/6.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
