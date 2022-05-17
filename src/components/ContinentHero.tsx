import { Flex, Text } from "@chakra-ui/react";
import { ContinentProps } from "../types/Slides";

interface HeroProps {
  continent: ContinentProps;
}

export function ContinentHero({ continent }: HeroProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "500px"]}
      bgImage={`url('${continent.src}')`}
      bgPosition={["center", "bottom"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        px={["136px", "140px"]}
        py={["56px", "60px"]}
        align="end"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.25)"
      >
        <Text
          fontSize={["1.75rem", "3rem"]}
          fontWeight="semibold"
          textAlign="center"
        >
          {continent.title}
        </Text>
      </Flex>
    </Flex>
  );
}
