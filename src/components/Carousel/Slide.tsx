import { Box, Flex, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../types/Slides";
import { useRouter } from "next/router";

interface SlideObjProps {
  slideData: ContinentProps;
}

export function Slide({ slideData }: SlideObjProps) {
  const router = useRouter();

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
        <Text
          fontSize={["1.5rem", "3rem"]}
          cursor="pointer"
          onClick={() =>
            router.push(`/continents/${slideData.title.toLowerCase()}`)
          }
        >
          {slideData.title}
        </Text>
        <Text
          fontSize={["0.875rem", "1.5rem"]}
          cursor="pointer"
          onClick={() =>
            router.push(`/continents/${slideData.title.toLowerCase()}`)
          }
        >
          {slideData.subtitle}
        </Text>
      </Flex>
    </Flex>
  );
}
