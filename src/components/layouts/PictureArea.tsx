import React from "react";

const PictureArea = () => {
  return (
    <div className="picture-area">
      <picture>
        <source
          srcSet="https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2024/20240508_banner_135210.webp 1x,https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/20240508_banner_135210.webp 1.7x,https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2024/20240508_banner_135210.webp 2.5x"
          type="image/webp"
        />
        <img
          src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/20240508_banner_135210.jpg"
          alt="일드_25시, 아카사카에서"
          className="big-banner"
        />
      </picture>
      <picture>
        <source
          srcSet="https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2024/imgbuild_20240701_145546523.webp 1x,https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/imgbuild_20240701_145546523.webp 1.7x,https://image.wavve.com/v1/thumbnails/3720_1524_20_80/banner/pooq/2024/imgbuild_20240701_145546523.webp 2.5x"
          type="image/webp"
        />
        <img
          src="https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/imgbuild_20240701_145546523.png"
          alt="일드_25시, 아카사카에서"
          className="banner-title"
        />
      </picture>
    </div>
  );
};
export default PictureArea;
