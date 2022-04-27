import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { UniqueInfo } from "./UniqueInfo";

interface InfoProps {
  countries: number;
  languages: number;
  starredCities: number;
}

export function ContinentsInfo({
  countries,
  languages,
  starredCities,
}: InfoProps) {
  return (
    <Flex align="center" justify="space-between" w="500px">
      <UniqueInfo quantity={countries}>países</UniqueInfo>
      <UniqueInfo quantity={languages}>línguas</UniqueInfo>
      <UniqueInfo quantity={starredCities} tooltip>
        cidades +100
      </UniqueInfo>
    </Flex>
  );
}
