import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "./Slide";

const continents = [
  {
    title: "Europa",
    subtitle: "O continente mais antigo",
    src: "https://bigseventravel.com/wp-content/uploads/2019/01/patrick-tomasso-40308-unsplash-1920x1440.jpg",
  },
];

export function Carousel() {
  return (
    <Swiper
      className="mySwiper"
      style={{ backgroundColor: "#fff", height: 450, width: "100%" }}
      navigation
      pagination
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <Slide slideData={continents[0]} />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
