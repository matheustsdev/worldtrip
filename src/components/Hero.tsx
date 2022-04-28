import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Hero() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      direction="column"
      bgImage="url('/sky_bg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h={["163px", "335px"]}
      px={["1rem", "140px"]}
      py={["1.75rem", "80px"]}
      mb={["2.25rem", "20"]}
    >
      <Text
        as="h1"
        fontSize={["1.25rem", "2.25rem"]}
        h={["58px", "120px"]}
        lineHeight={["30px", "54px"]}
      >
        5 continentes,
        <br />
        infinitas possibilidades.
      </Text>
      <Text
        as="h2"
        w={["333px", "524px"]}
        mt={["0.5rem", "5"]}
        fontSize={["0.875rem", "1.25rem"]}
        fontWeight="normal"
        color="light.indo"
        lineHeight={["21px", "30px"]}
        fontStyle="normal"
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
      {isWideVersion && (
        <Image
          src="/airplane.png"
          alt="Céu estrelado"
          w="418px"
          right="140px"
          top="176px"
          position="absolute"
        />
      )}
    </Flex>
  );
}
