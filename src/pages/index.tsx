import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Header />
      <Hero />
      <Box w="100%">
        <TravelTypes />
      </Box>
      <Divider border="2px solid" borderColor="dark.text" w="90px" my="20" />
      <Text
        textAlign="center"
        fontSize="2.25rem"
        lineHeight="54px"
        fontWeight="medium"
        color="dark.text"
        mb="50px"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Carousel />
      <Box mb="10" />
    </Flex>
  );
}
