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
import { useEffect } from "react";
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
        <Td>{like.dateCreated}</Td>
        <Td>
          <Button>Delete</Button>
        </Td>
      </Tr>
    ));
  }

  return (
    <Flex justifyContent="center">
      <Table
        mt="5"
        variant="unstyled"
        rounded={"xl"}
        overflow="scroll"
        bg={useColorModeValue("white", "gray.800")}
        w="50"
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
