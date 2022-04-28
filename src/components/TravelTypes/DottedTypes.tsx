import { Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";

export function DottedTypes() {
  return (
    <Flex
      px="50px"
      justify="space-between"
      direction="column"
      w="100%"
      h="120px"
    >
      <Flex justify="space-between">
        <Flex align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="highlight" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            vida noturna
          </Text>
        </Flex>
        <Flex align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="highlight" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            praia
          </Text>
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Flex align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="highlight" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            moderno
          </Text>
        </Flex>
        <Flex align="center" justify="center">
          <Icon as={GoPrimitiveDot} color="highlight" />
          <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
            clássico
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" justify="center">
        <Icon as={GoPrimitiveDot} color="highlight" />
        <Text fontSize="1.125rem" fontWeight="semibold" color="dark.text">
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
}
