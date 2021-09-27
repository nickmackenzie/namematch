import React, { useState, useEffect } from "react";

import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { getMatches } from "../helpers/matchHelper";
import { compareAsc, format } from "date-fns";
import { ImHeart, ImHeartBroken } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [likes, setLikes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [delIndex, setDelIndex] = useState([]);

  let needsUpdated = true;
  let letPass = true;

  // const deleteName = (input, id) => {

  //   //input.target.id
  //   setDelIndex(id.like);
  //   delName(delIndex).then((items) => {

  //     //  setLikes(items);
  //   });
  // };

  useEffect(() => {
    const nameData = localStorage.getItem("email");

    if (letPass) {
      getMatches(nameData).then((likesData) => {
        setLikes(likesData);
        console.log("matches", likesData);
      });

      letPass = false;
    }
  }, []);

  function renderTable() {
    return likes.map((like, i) => (
      <Box rounded="xl">
        <Icon color="red.600" as={FaHeart}></Icon>

        <Flex
          justifyContent="space-around"
          flexDir="column"
          m="2"
          bg={"white"}
          rounded="xl"
          shadow="md"
          p="2"
        >
          <h4>{like.name}</h4>
        </Flex>
      </Box>
    ));
  }
  return (
    <Box justifyContent="center" overflowY="scroll" maxHeight="300px">
      {" "}
      {renderTable()}
    </Box>
  );
}
