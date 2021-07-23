import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";

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

const alertLike = () => {
  toast.success("Liked", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};

const alertError = () => {
  toast.error("Error", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};

const loadingAlert = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } max-w-md  w-full`}
    >
      <Player
        mode="bounce"
        background="transparent"
        autoplay
        speed="2"
        keepLastFrame
        src="https://assets10.lottiefiles.com/packages/lf20_QBlCSK.json"
      ></Player>
    </div>
  ));
};

function likeOrDislike(choice) {
  const userID = localStorage.getItem("email");

  axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/LikeName/`, {
      params: {
        meaning: choice.currentTarget.id,
        name: choice.currentTarget.dataset.name,
        email: userID,
        sex: "boy",
      },
    })
    .then(function (response) {
      console.log("response", response);
      if (response.data) {
        loadingAlert();
        return response;
      }
    })
    .catch(function (error) {
      console.log(error);
      alertError();
    });
}
export default function Advanced(props) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        p={4}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={`https://picsum.photos/200/300?random=${props.picture}"`}
          alt={"male name"}
          mb={2}
          pos={"relative"}
        />
        <Heading fontSize={"4xl"} margin={4} fontFamily={"body"}>
          {props.name}
        </Heading>

        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {props.meaning}
        </Text>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            id="like"
            data-name={props.name}
            onClick={likeOrDislike}
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
