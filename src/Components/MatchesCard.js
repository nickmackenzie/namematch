import React, { useState, useEffect, Component, useContext } from "react";
//import { getLikesUser, getMatches, delName } from "../utils/getNameData";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { getLikesUser, getMatches, getLikes } from "../helpers/matchHelper";
import DataTable from "react-data-table-component";
import "swiper/swiper.scss";
import { compareAsc, format } from "date-fns";

const columns = [
  {
    name: "Like",
  },
];

function MatchPanel() {
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
      <Flex
        direction={{ base: "row", md: "column" }}
        bg={useColorModeValue("white", "gray.800")}
        key={i}
      >
        {useBreakpointValue({ base: true, md: pid === 0 }) && (
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, md: 3 }}
            w={{ base: 120, md: "full" }}
            textTransform="uppercase"
            bg={useColorModeValue("gray.100", "gray.700")}
            color={useColorModeValue("gray.500")}
            py={{ base: 1, md: 4 }}
            px={{ base: 2, md: 10 }}
            fontSize="md"
            fontWeight="hairline"
            display="table-header-group"
          >
            <span>Name</span>
            <span>Date</span>
            <chakra.span textAlign={{ md: "right" }}></chakra.span>
          </SimpleGrid>
        )}
        <SimpleGrid
          spacingY={3}
          columns={{ base: 1, md: 3 }}
          w="full"
          py={2}
          px={10}
          fontWeight="hairline"
        >
          <span>{like.name}</span>
          <chakra.span
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {format(new Date(like.dateCreated), "EEEE MMM do yyyy")}
          </chakra.span>
          <Flex justify={{ md: "end" }}>
            <Button variant="solid" colorScheme="red" size="sm">
              Delete
            </Button>
          </Flex>
        </SimpleGrid>
      </Flex>
    ));
  }
  return <div>{renderTable()}</div>;
}
export default MatchPanel;
