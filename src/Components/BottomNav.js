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
    <Flex w="full" justifyContent="center">
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
        <Flex justifyContent="space-between" alignItems="center" mt={4}>
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
              <IoMaleSharp size={"2rem"}> </IoMaleSharp>

              <span class="tab tab-home block text-xs">Boy Names</span>
            </Flex>
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
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <IoFemaleSharp size={"2rem"}></IoFemaleSharp>
              <span class="tab tab-kategori block text-xs">Girl Names</span>
            </Flex>
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
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <GiLovers size={"2rem"}></GiLovers>
              <span class="tab tab-explore block text-xs">Matches</span>
            </Flex>
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
            {" "}
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <BiCog className="" size={"2rem"}></BiCog>
              <span class="tab tab-whishlist block text-xs">Settings</span>
            </Flex>
          </Link>
          <FormControl m="4" display="flex" alignItems="center">
            <Switch onChange={toggleColorMode} />
          </FormControl>
        </Flex>
      </Box>
    </Flex>
  );
}
export default NavBar;
