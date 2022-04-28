import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      overflow={"hidden"}
    >
      <Header />
      <Hero />
      <TravelTypes />
      <Divider
        border={["1px solid", "2px solid"]}
        borderColor="dark.text"
        w="90px"
        my={["9", "20"]}
      />
      <Text
        textAlign="center"
        fontSize={["1.25rem", "2.25rem"]}
        lineHeight={["30px", "54px"]}
        fontWeight="medium"
        color="dark.text"
        mb={["1.25rem", "50px"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Carousel />
      <Box mb={["6", "10"]} />
    </Flex>
  );
}
