import * as React from "react";

interface CarouselImageProps {
  text: string;
}

const imageStyle = {
  width: "100%",
  height: "100vh"
};

const ExampleCarouselImage: React.FC<CarouselImageProps> = ({ text }) => {
  if (text === "First slide") {
    return (
      <img
        src="https://media.istockphoto.com/id/1585613131/photo/autumn-leaves-on-the-fall-blurred-background.webp?s=2048x2048&w=is&k=20&c=a51iBzLJDbUnJZubF3JWU9ytUb67BXs4Zw0ouTCuoRk="
        style={imageStyle}
        alt="First slide - Autumn leaves"
      />
    );
  }
  if (text === "Second slide") {
    return (
      <img
        src="https://media.istockphoto.com/id/841380450/photo/autumn-in-the-white-mountains-of-new-hampshire.webp?s=2048x2048&w=is&k=20&c=lCrZpa08MBivWf9veR_QnfdSFNTbXYoyZVOhjg6qkM0="
        style={imageStyle}
        alt="Second slide - White mountains"
      />
    );
  }
  return (
    <img
      src="https://media.istockphoto.com/id/1556220067/photo/original-wide-format-background-image-on-autumn-theme-with-space-for-text.webp?s=2048x2048&w=is&k=20&c=IgFVgZ_LJ-Evkc648DkdyaI5gRsBtx7gjd_BgRvv73s="
      style={imageStyle}
      alt="Third slide - Autumn theme"
    />
  );
};

export default ExampleCarouselImage;