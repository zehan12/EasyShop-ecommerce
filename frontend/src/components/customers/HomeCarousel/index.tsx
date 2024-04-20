import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const data = [
  {
    image:
      "https://images.hdqwalls.com/download/blanca-suarez-marie-claire-espana-january-2024-9t-1920x1080.jpg",
  },
  {
    image:
      "https://media.gq.com.mx/photos/5e613080bb13f4000953fb19/16:9/w_2240,c_limit/COVER%20TESSA%20IA%20DESENFRENADAS%20GQ%20ME%CC%81XICO%20ANTUNES%20EXCLUSIVA%20BY%20ANA%20HOP.jpg",
  },
  {
    image: "https://fashionweekdaily.com/wp-content/uploads/2021/02/AF.jpg",
  },
  {
    image:
      "https://fashionweekdaily.com/wp-content/uploads/2024/03/kaia-dkny-heart-ny-capsule-main.jpg",
  },
  {
    image:
      "https://fashionweekdaily.com/wp-content/uploads/2023/10/Screen-Shot-2023-10-19-at-2.42.42-PM.png",
  },
  {
    image:
      "https://www.pixel4k.com/wp-content/uploads/2021/10/billie-eilish-vogue-australia-4k_1634183303.jpg.webp",
  },
  {
    image:
      "https://picstatio.com/large/vuv7au/kendall-jenner-2017-celebrity-wallpaper.jpg",
  },
  {
    image: "https://picstatio.com/large/c79465/barbara-palvin-2021.jpeg",
  },
  {
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWwJYGYh0ElCLxh-XdcW5KfZHvQBpz31wHhEfOr1nN_0DIma9W8Qb2kRO6ma0TuDbZ88TS9khCfY-iLqoBQm5tWVAZ7yif6qxmStMk8MWXZddu44_EzciAGbEsG8WRBBsZsWjT4fCoMMw/s1600/keira-munro-fashiontography-glamour-01.jpg",
  },
  {
    image: "https://picstatio.com/large/llqzur/Jackie-2016-movie-wallpaper.jpg",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/mireia-oriol-alma-netflix-esquire-1660718710.jpg?crop=0.864xw:0.685xh;0.0259xw,0.176xh&resize=2048:*",
  },
  { image: "https://img.ccma.cat/multimedia/png/7/1/1697731053817_3840.png" },
  {
    image:
      "https://w.forfun.com/fetch/b9/b986f4be7841dcbf3245baf31192b983.jpeg?w=1470&r=0.5625",
  },
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f4d26825140111.563421309f2c3.JPG",
  },
  {image:"https://images.squarespace-cdn.com/content/v1/55f45174e4b0fb5d95b07f39/1518364808422-469UKM0MGRSX9JYWIYTI/natalie-portman-cass-bird-porter-25-+%284%29.jpg?format=2500w"},
  {image:"https://images.squarespace-cdn.com/content/v1/55f45174e4b0fb5d95b07f39/1713308126800-4FNIAEJ0N2BJSPHKJ3T5/Vittoria-Ceretti-by-Thibaut-Grevet-Dazed-Spring-2024-3.jpeg"}
];


export const HomeCarousel = () => {
  const items = data.map((item) => (
    <img className="h-[80vh] w-full object-contain" src={item.image} />
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};
