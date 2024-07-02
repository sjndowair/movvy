import React from "react";
import {
  PictureBox,
  Overlay,
  ContainImg,
  Banner,
} from "../styles/contain-style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PictureArea = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <PictureBox>
      <Slider {...settings}>
        {[...Array(3)].map((_, index) => (
          <Overlay key={index}>
            <picture>
              <source
                srcSet="https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2024/20240508_banner_135210.webp 1x,https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/20240508_banner_135210.webp 1.7x,https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2024/20240508_banner_135210.webp 2.5x"
                type="image/webp"
              />
              <ContainImg
                src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/20240508_banner_135210.jpg"
                alt="일드_25시, 아카사카에서"
              />
            </picture>
            <picture>
              <source
                srcSet="https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2024/imgbuild_20240701_145546523.webp 1x,https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/imgbuild_20240701_145546523.webp 1.7x,https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2024/imgbuild_20240701_145546523.webp 2.5x"
                type="image/webp"
              />
              <Banner
                src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/imgbuild_20240701_145546523.png"
                alt="일드_25시, 아카사카에서"
              />
            </picture>
          </Overlay>
        ))}
      </Slider>
    </PictureBox>
  );
};

export default PictureArea;
