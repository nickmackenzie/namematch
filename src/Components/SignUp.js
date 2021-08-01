import React, { useState, useEffect, useRef } from "react";
import { createUser } from "../helpers/SignInHelper";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";
import { useToast } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Success from "./Alerts/Success";
import Error from "./Alerts/Error";
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

const accountCreatedSuccessAlert = () => {
  toast({
    position: "top",
    render: () => <Success title="Success" body="Account Created"></Success>,
  });
};
const userFoundAlert = () => {
  toast({
    position: "top",
    render: () => <Error title="Error" body="Account Found"></Error>,
  });
};

const creatingAccountAlert = () => {
  toast({
    position: "top",
    render: () => <Success title="Success" body="Account Created!"></Success>,
  });
};

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    createUser(email, password).then((user) => {
      if (user !== false) {
        creatingAccountAlert();
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        userFoundAlert();
        return user;
      }
    });
  };
  function handleChange(event) {
    // Here, we invoke the callback with the new value

    props.onChange(true);
  }
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
              Sign Up{" "}
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
              Sign Up
            </Button>
            <Text margin={3}>
              Already Have An Account?{" "}
              <Button id="true" onClick={handleChange}>
                Login
              </Button>
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
export default SignUp;
