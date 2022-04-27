import { Flex, Image, Text } from "@chakra-ui/react";
import { CitiesProps } from "../types/Cards100";

interface CardProps {
  city: CitiesProps;
}

export function CountryCard({ city }: CardProps) {
  return (
    <Flex
      direction="column"
      w="256px"
      h="279px"
      align="center"
      borderRadius="4px"
      border="1px solid"
      borderColor="highlight"
    >
      <Image
        w="100%"
        h="173px"
        src={city.city_img}
        alt={city.name}
        borderTopRadius="4px"
      />
      <Flex
        px="1.5rem"
        py="1.125rem"
        w="100%"
        justify="space-between"
        align="center"
      >
        <Flex direction="column" h="4rem" justify="space-between">
          <Text fontSize="1.25rem" color="dark.text" fontWeight="semibold">
            {city.name}
          </Text>
          <Text color="dark.info" fontWeight="medium">
            {city.country}
          </Text>
        </Flex>
        <Image
          h="30px"
          w="30px"
          overflow="hidden"
          borderRadius="15px"
          src={city.flag}
          alt={`Bandeira de ${city.country}`}
        />
      </Flex>
    </Flex>
  );
}
