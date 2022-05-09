import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface InfoProps {
  quantity: number;
  children: string;
  tooltip?: boolean;
}

export function UniqueInfo({ children, quantity, tooltip = false }: InfoProps) {
  return (
    <Flex
      direction="column"
      h="100px"
      minW="100px"
      align="center"
      justify="center"
    >
      <Text
        fontSize={["1.5rem", "3rem"]}
        color="highlight"
        fontWeight="semibold"
      >
        {quantity}
      </Text>
      <Flex align="center">
        <Text
          fontSize={["1.125rem", "1.5rem"]}
          color="dark.text"
          fontWeight={["regular", "semibold"]}
        >
          {children}
        </Text>
        {tooltip && (
          <Tooltip
            hasArrow
            label="Cidades que estão entre as 100 cidades mais visitadas do mundo."
            aria-label="A tooltip"
            w="200px"
            textAlign="justify"
            bg="gray.700"
          >
            <Flex
              as="span"
              fontSize={["0.5rem", "1rem"]}
              pl="5px"
              align="center"
              justify="center"
            >
              <AiOutlineInfoCircle />
            </Flex>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  );
}
