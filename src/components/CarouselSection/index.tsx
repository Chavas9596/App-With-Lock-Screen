import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://media.istockphoto.com/id/1585613131/photo/autumn-leaves-on-the-fall-blurred-background.webp?s=2048x2048&w=is&k=20&c=a51iBzLJDbUnJZubF3JWU9ytUb67BXs4Zw0ouTCuoRk=" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/841380450/photo/autumn-in-the-white-mountains-of-new-hampshire.webp?s=2048x2048&w=is&k=20&c=lCrZpa08MBivWf9veR_QnfdSFNTbXYoyZVOhjg6qkM0=" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1585613131/photo/autumn-leaves-on-the-fall-blurred-background.webp?s=2048x2048&w=is&k=20&c=a51iBzLJDbUnJZubF3JWU9ytUb67BXs4Zw0ouTCuoRk=" />
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/841380450/photo/autumn-in-the-white-mountains-of-new-hampshire.webp?s=2048x2048&w=is&k=20&c=lCrZpa08MBivWf9veR_QnfdSFNTbXYoyZVOhjg6qkM0=" />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselSection;
