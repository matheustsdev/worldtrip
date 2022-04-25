import { Flex, Image, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex px="140px" align="center" justify="space-between">
      <Flex direction="column" align="center" justify="center">
        <Image src="/cocktail.png" alt="Coquetel" />
        <Text fontSize="1.5rem" fontWeight="semibold" color="dark.text">
          vida noturna
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/surf.png" alt="Prancha de surfe" />
        <Text fontSize="1.5rem" fontWeight="semibold" color="dark.text">
          praia
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/building.png" alt="Prédio" />
        <Text fontSize="1.5rem" fontWeight="semibold" color="dark.text">
          moderno
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/museum.png" alt="Museu" />
        <Text fontSize="1.5rem" fontWeight="semibold" color="dark.text">
          clássico
        </Text>
      </Flex>
      <Flex direction="column" align="center" justify="center">
        <Image src="/earth.png" alt="Planeta" />
        <Text fontSize="1.5rem" fontWeight="semibold" color="dark.text">
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
}
