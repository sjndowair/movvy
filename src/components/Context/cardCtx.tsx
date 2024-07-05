interface IImageContain {
  webSrcSet: string;
  imgSrc: string;
  alt: string;
}

interface Card {
  ImageContain: IImageContain[];
}

export const cardData: Card[] = [
  {
    ImageContain: [
      {
        webSrcSet:
          "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202311/1699601487098289299.webp 1x,https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202311/1699601487098289299.webp 1.7x,https://image.wavve.com/v1/thumbnails/720_1080_20_80/meta/image/202311/1699601487098289299.webp 2.5x",
        imgSrc:
          "https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202311/1699601487098289299.jpg",
        alt: "나 혼자 산다",
      },
    ],
  },
  {
    ImageContain: [
      {
        webSrcSet:
          "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202311/1698908219745378929.webp 1x,https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202311/1698908219745378929.webp 1.7x,https://image.wavve.com/v1/thumbnails/720_1080_20_80/meta/image/202311/1698908219745378929.webp 2.5x",
        imgSrc:
          "https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202311/1698908219745378929.jpg",
        alt: "런닝맨",
      },
    ],
  },
  {
    ImageContain: [
      {
        webSrcSet:
          "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202402/1708404301458518711.webp 1x,https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202402/1708404301458518711.webp 1.7x,https://image.wavve.com/v1/thumbnails/720_1080_20_80/meta/image/202402/1708404301458518711.webp 2.5x",
        imgSrc:
          "https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202402/1708404301458518711.jpg",
        alt: "골 때리는 그녀들",
      },
    ],
  },
  {
    ImageContain: [
      {
        webSrcSet:
          "https://image.wavve.com/v1/thumbnails/240_360_20_80/meta/image/202407/1719877649144513611.webp 1x,https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202407/1719877649144513611.webp 1.7x,https://image.wavve.com/v1/thumbnails/720_1080_20_80/meta/image/202407/1719877649144513611.webp 2.5x",
        imgSrc:
          "https://image.wavve.com/v1/thumbnails/480_720_20_80/meta/image/202407/1719877649144513611.jpg",
        alt: "모든패밀리",
      },
    ],
  },
];
