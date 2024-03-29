import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Slide } from "./Slide";
import { useContinents } from "../../hooks/useContinents";
import { useBreakpointValue } from "@chakra-ui/react";

export function Carousel() {
  const { continents } = useContinents();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Swiper
      className="mySwiper"
      style={{ height: isWideVersion ? 450 : 250, width: "100%" }}
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
