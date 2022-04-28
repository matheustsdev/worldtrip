import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      align="center"
      justify="center"
      h={["50px", "100px"]}
      w="100%"
      bg="light.white"
    >
      <Image src="/logo.png" alt="World Trip" w={["81px", "184px"]} />
    </Flex>
  );
}
