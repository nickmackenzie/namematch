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

export default function Advanced() {
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
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Lindsey James
        </Heading>

        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Actress, musician, songwriter and artist. PM for work inquires or{" "}
          <Link href={"#"} color={"blue.400"}>
            #tag
          </Link>{" "}
          me in your posts
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            <ImHeart size={30}></ImHeart>
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            <ImHeartBroken size={30}></ImHeartBroken>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
