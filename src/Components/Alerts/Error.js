import React from "react";
import { chakra, Box, Icon, Flex, useColorModeValue } from "@chakra-ui/react";

import { BsLightningFill } from "react-icons/bs";

export default function Error(props) {
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
      <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
        <Icon as={BsLightningFill} color="white" boxSize={6} />
      </Flex>

      <Box mx={-3} py={2} px={4}>
        <Box mx={3}>
          <chakra.span
            color={useColorModeValue("red.400", "red.500")}
            fontWeight="bold"
          >
            {props.title}
          </chakra.span>
          <chakra.p
            color={useColorModeValue("gray.200", "gray.600")}
            fontSize="sm"
          >
            {props.body}
          </chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}
