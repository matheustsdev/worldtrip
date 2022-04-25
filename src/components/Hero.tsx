import { Box, Image, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      bgImage="url('/sky_bg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      w="100%"
      h="335px"
      px="140px"
      py="80px"
      mb="20"
    >
      <Text as="h1" fontSize="2.25rem" h="120px" lineHeight="54px">
        5 continentes,
        <br />
        infinitas possibilidades.
      </Text>
      <Text
        as="h2"
        w="524px"
        mt="5"
        fontSize="1.25rem"
        fontWeight="normal"
        color="light.indo"
        lineHeight="30px"
        fontStyle="normal"
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
      <Image
        src="/airplane.png"
        alt="Céu estrelado"
        w="418px"
        right="140px"
        top="176px"
        position="absolute"
      />
    </Box>
  );
}
