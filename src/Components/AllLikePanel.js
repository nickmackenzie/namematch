import React, { useState } from "react";
import { getLikes } from "../helpers/matchHelper";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Container,
  Spinner,
  Center,
  Flex,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
  FormControl,
  FormLabel,
  Switch,
  useColorModeValue,
  Button,
  TableCaption,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy } from "react-table";
import { useEffect } from "react";
import { compareAsc, format } from "date-fns";
let CurrentDisplay = "";
export default function AllLikePanel(props) {
  const [likeList, setLikeList] = useState([]);
  const [loader, setLoader] = useState("loading");

  let mounted = true;

  useEffect(() => {
    mounted = true;

    getLikes().then((items) => {
      if (mounted) {
        console.log(items.data);
        setLikeList(items.data);

        setLoader("done");
      }
    });

    return () => (mounted = false);
  }, []);

  function renderTable() {
    return likeList.map((like, i) => (
      <Tr key={i}>
        <Td>{like.name}</Td>
        <Td>{`${format(
          new Date(like.dateCreated),
          "EE MMM do yyyy '@' h:mm a"
        )}`}</Td>
        <Td>
          <Button>Delete</Button>
        </Td>
      </Tr>
    ));
  }

  return (
    <Flex justifyContent="center" overflow="scroll" maxHeight="300px">
      <Table
        mt="5"
        rounded={"xl"}
        overflow="scroll"
        bg={useColorModeValue("white", "gray.800")}
        w="50"
        size="sm"
      >
        {" "}
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>{renderTable()}</Tbody>
      </Table>
    </Flex>
  );
}
