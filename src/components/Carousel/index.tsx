import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slide } from "./Slide";
import { useContinents } from "../../hooks/useContinents";

export function Carousel() {
  const { continents } = useContinents();

  return (
    <Swiper
      className="mySwiper"
      style={{ backgroundColor: "#fff", height: 450, width: "100%" }}
      navigation
      pagination
      modules={[Pagination, Navigation]}
    >
      {continents.map((continent) => {
        return (
          <SwiperSlide key={continent.id}>
            <Slide slideData={continent} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
