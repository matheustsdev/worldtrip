import { Flex, Text } from "@chakra-ui/react";
import { ContinentProps } from "../types/Slides";

interface HeroProps {
  continent: ContinentProps;
}

export function ContinentHero({ continent }: HeroProps) {
  return (
    <Flex
      w="100%"
      h="500px"
      bgImage={`url('${continent.src}')`}
      bgPosition="bottom"
      bgRepeat="no-repeat"
    >
      <Flex
        px="140px"
        py="60px"
        align="end"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.25)"
      >
        <Text fontSize="3rem" fontWeight="semibold">
          {continent.title}
        </Text>
      </Flex>
    </Flex>
  );
}
