import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Success() {
  return (
    <Flex
      maxW="sm"
      w="full"
      mx="auto"
      bg={useColorModeValue("gray.800", "white")}
      shadow="md"
      rounded="lg"
      overflow="hidden"
    >
      <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
        <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
      </Flex>

      <Box mx={-3} py={2} px={4}>
        <Box mx={3}>
          <chakra.span
            color={useColorModeValue("green.400", "green.500")}
            fontWeight="bold"
          >
            Success
          </chakra.span>
          <chakra.p
            color={useColorModeValue("gray.200", "gray.600")}
            fontSize="sm"
          >
            Your account was found!
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}
