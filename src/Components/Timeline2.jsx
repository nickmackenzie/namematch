import React, { useState, useEffect } from "react";

import { Box, Flex, Avatar, WrapItem } from "@chakra-ui/react";
import { getLikes } from "../helpers/matchHelper";
import { compareAsc, format } from "date-fns";
import { ImHeart, ImHeartBroken } from "react-icons/im";
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
      getLikes(nameData).then((likesData) => {
        setLikes(likesData.data);
        console.log("matches", likes[0]);
      });

      letPass = false;
    }
  }, []);

  function renderTable() {
    return likes.map((like, i) => (
      <>
        <Flex
          justifyContent="space-around"
          flexDir="column"
          bg="white"
          m="2"
          rounded="xl"
          p="2"
        >
          <h4>{like.name}</h4>

          <h3>{`${format(
            new Date(like.dateCreated),
            "EE MMM do yyyy '@' h:mm a"
          )}`}</h3>
        </Flex>
      </>
    ));
  }
  return (
    <Box justifyContent="center" overflowY="scroll" maxHeight="300px">
      {" "}
      {renderTable()}
    </Box>
  );
}
