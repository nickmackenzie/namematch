import React, { useState } from "react";

import { FaSignOutAlt } from "react-icons/fa";

import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Center,
  FormControl,
  Switch,
  toggleColorMode,
  useColorMode,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BiCog } from "react-icons/bi";
function NavBar(props) {
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    console.log("test", event.currentTarget.id);
    props.onChange(event.currentTarget.id);
  }

  function handleLogout(event) {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/";
  }
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex flexDirection="column">
      <Box
        mx="auto"
        rounded="lg"
        shadow="lg"
        maxW="2xl"
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        p={2}
        textAlign={"center"}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          height="50px"
        >
          {" "}
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
            id="boy"
            onClick={handleChange}
          >
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <span>Boys</span>
              <IoMaleSharp size={"2rem"}> </IoMaleSharp>
            </Flex>
          </Link>
          <Divider m="1" orientation="vertical" />
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
            id="girl"
            onClick={handleChange}
            alignItems="center"
            m="1"
            textAlign="center"
          >
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <span>Girls</span>
              <IoFemaleSharp size={"2rem"}></IoFemaleSharp>
            </Flex>
          </Link>
          <Divider m="1" orientation="vertical" />
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
            id="matches"
            onClick={handleChange}
            alignItems="center"
            m="1"
            textAlign="center"
          >
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <span>Matches</span>
              <GiLovers size={"2rem"}></GiLovers>
            </Flex>
          </Link>
          <Divider m="1" orientation="vertical" />
          <Link
            color={useColorModeValue("brand.600", "brand.400")}
            _hover={{ textDecor: "underline" }}
            id="settings"
            onClick={handleChange}
            alignItems="center"
            m="1"
            textAlign="center"
          >
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <span>Settings</span>
              <BiCog className="" size={"2rem"}></BiCog>
            </Flex>
          </Link>
        </Flex>
        <FormControl mt="1">
          <Switch onChange={toggleColorMode} />
        </FormControl>
        <FormControl mt="1">
          <Button onClick={handleLogout}>Logout</Button>
        </FormControl>
      </Box>
    </Flex>
  );
}
export default NavBar;
