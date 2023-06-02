import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="carousel-tile">{/* Content for tile 1 */}</div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-tile">{/* Content for tile 2 */}</div>
        </div>
        <div className="carousel-slide">
          <div className="carousel-tile">{/* Content for tile 3 */}</div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
