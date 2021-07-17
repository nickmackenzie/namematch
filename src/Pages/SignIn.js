import React, { useState } from "react";
import { loginUser } from "../helpers/SignInHelper";
import loginIllustration from "../imgs/loginIllustration.svg";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";

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
const alertLoginSuccess = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } pointer-events-auto`}
    >
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets1.lottiefiles.com/packages/lf20_wwcnpl4u.json"
          style={{ height: "150px", width: "150px" }}
        ></Player>
      </div>
    </div>
  ));
};

const userNotFoundAlert = () => {
  toast.custom((t) => (
    <div className={`${t.visible ? "fade-in-fwd" : "fade-out-bck"} `}>
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets8.lottiefiles.com/packages/lf20_K3XjOi.json"
          style={{ height: "60px", width: "60px" }}
        ></Player>
      </div>
    </div>
  ));
};
const emptyFieldAlert = () => {
  toast.custom((t) => (
    <div className={`${t.visible ? "fade-in-fwd" : "fade-out-bck"} `}>
      <div className="m-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets8.lottiefiles.com/packages/lf20_K3XjOi.json"
          style={{ height: "60px", width: "60px" }}
        ></Player>
      </div>
    </div>
  ));
};
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
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
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}

export default SignIn;
