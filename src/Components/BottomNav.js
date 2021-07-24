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
  useColorMode,
  Link,
  Center,
  Button,
} from "@chakra-ui/react";
import { BiCog } from "react-icons/bi";
function NavBar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  function handleChange(event) {
    // Here, we invoke the callback with the new value
    console.log("test", event.currentTarget.id);
    props.onChange(event.currentTarget.id);
  }

  function handleLogout(event) {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/";
  }

  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue("white", "gray.800")}
      maxW="2xl"
      mt="4"
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"lg"}
      rounded={"lg"}
      p={2}
      textAlign={"center"}
    >
      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        {" "}
        <Link
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
          id="boy"
          onClick={handleChange}
          alignItems="center"
        >
          {" "}
          <Center>
            <IoMaleSharp alignItems="center" size={"2.5rem"}>
              {" "}
            </IoMaleSharp>
          </Center>
        </Link>
        <Link
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
          id="girl"
          onClick={handleChange}
          alignItems="center"
          m="3"
          textAlign="center"
        >
          <IoFemaleSharp size={"2.5rem"}></IoFemaleSharp>
        </Link>
        <Link
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
          id="matches"
          onClick={handleChange}
          alignItems="center"
          m="3"
          textAlign="center"
        >
          <GiLovers size={"2.5rem"}></GiLovers>
        </Link>
        <Link
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
          id="settings"
          onClick={handleChange}
          alignItems="center"
          m="3"
          textAlign="center"
        >
          <BiCog className="" size={"2.5rem"}></BiCog>
        </Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Box>
  );
}
export default NavBar;
