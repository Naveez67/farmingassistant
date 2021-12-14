import React from "react";
import { Carousel } from "react-bootstrap";
import im1 from "./images/im1.jpg";
import im2 from "./images/im2.jpg";
import im3 from "./images/im3.jpg";
import im4 from "./images/im4.jpg";
import './carousel.css'
const MyCarousel = () => {
  return (
    <div id="home" className="marginbotom">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={im1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={im4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={im3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={im2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      
      
    </div>
  );
};

export default MyCarousel;
