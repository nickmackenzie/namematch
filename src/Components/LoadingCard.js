import React, { useState, useMemo, useEffect } from "react";
// import TinderCard from '../react-tinder-card/index'
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { ImHeart, ImHeartBroken } from "react-icons/im";

export default function Advanced(props) {
  console.log();
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          }
          alt={"male name"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"4xl"} margin={4} fontFamily={"body"}>
          Loading
        </Heading>

        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        ></Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            color={"white"}
            bg={"red.300"}
            _focus={{
              bg: "red.400",
            }}
            _focus={{
              bg: "red.400",
            }}
          >
            <ImHeart size={30}></ImHeart>
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"gray.400"}
            color={"white"}
            _hover={{
              bg: "gray.500",
            }}
            _focus={{
              bg: "gray.500",
            }}
          >
            <ImHeartBroken size={30}></ImHeartBroken>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
