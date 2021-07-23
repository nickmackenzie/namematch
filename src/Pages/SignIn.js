import React, { useState } from "react";
import { loginUser } from "../helpers/SignInHelper";

import loginIllustration from "../imgs/loginIllustration.svg";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";
import { useToast } from "@chakra-ui/react";
import { Link, useColorMode, useColorModeValue } from "@chakra-ui/react";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const alertLoginSuccess = () => {
    toast({
      title: "Account Found.",
      description: "Signing in...",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  const userNotFoundAlert = () => {
    toast({
      title: "Please Try Again.",
      description: "Wrong Password or Username",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };
  const emptyFieldAlert = () => {
    toast({
      title: "Empty Input",
      description: "Please fill out the form or create a new account.",
      status: "warning",
      duration: 9000,
      isClosable: true,
    });
  };

  function handleChange(event) {
    // Here, we invoke the callback with the new value

    props.onChange(false);
  }

  const submitValue = () => {
    if (email != "" || password !== "") {
      loginUser(email, password)
        .then((user) => {
          console.log("user", user);
          if (user !== false) {
            alertLoginSuccess();
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("email", user.email);
            localStorage.setItem("theme", user.theme);
            let htmlSelect = document.getElementsByTagName("html");

            return user;
          } else {
            userNotFoundAlert();
            return user;
          }
        })
        .then((user) => {
          console.log("user", user);
          if (user !== false) {
            setTimeout(() => {
              window.location.href = "/namematch";
            }, 2000);
          } else {
            return false;
          }
        });
    } else {
      emptyFieldAlert();
    }
  };

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.2}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              bgGradient="linear(to-r, blue.500,pink.300)"
              bgClip="text"
            >
              Name Match<br></br>
            </Text>{" "}
            The App For Expecting <br></br>Couples
          </Heading>
        </Stack>
        <Stack
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
          bg={useColorModeValue("white", "gray.800")}
        >
          <Stack spacing={4}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Sign In{" "}
            </Heading>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Text
                as={"span"}
                bgGradient="linear(to-r, blue.500,blue.300)"
                bgClip="text"
              >
                Username{" "}
              </Text>
              <Input
                type="email"
                required
                placeholder="email"
                class="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
                class="input input-bordered"
                placeholder=""
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Text
                as={"span"}
                bgGradient="linear(to-r, blue.500,pink.300)"
                bgClip="text"
              >
                Password{" "}
              </Text>
              <Input
                type="password"
                minlength="8"
                required
                placeholder=""
                class="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              onClick={submitValue}
              bgGradient="linear(to-r, blue.500,blue.300)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, blue.400,blue.500)",
                boxShadow: "xl",
              }}
            >
              Login
            </Button>
            <Text margin={3}>
              Don't have an account?{" "}
              <Button id="false" onClick={handleChange}>
                Sign Up
              </Button>
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default SignIn;
