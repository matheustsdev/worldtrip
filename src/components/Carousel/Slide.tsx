import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SlideProps } from "../../types/Slides";

interface SlideObjProps {
  slideData: SlideProps;
}

export function Slide({ slideData }: SlideObjProps) {
  return (
    <Flex
      bgImage={`url('${slideData.src}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      fontWeight="bold"
      color="light.text"
      width="100%"
      height="100%"
    >
      <Flex
        w="100%"
        h="100%"
        pos="absolute"
        bg="rgba(0,0,0,0.25)"
        direction="column"
        align="center"
        justify="center"
      >
        <Text fontSize="3rem">{slideData.title}</Text>
        <Text fontSize="1.5rem">{slideData.subtitle}</Text>
      </Flex>
    </Flex>
  );
}
