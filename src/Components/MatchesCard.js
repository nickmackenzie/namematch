import React from "react";
import {} from "react-super-responsive-table";
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
export default function TableExample(props) {
  return (
    <Flex justifyContent="center">
      <Table
        mt="5"
        variant="unstyled"
        rounded={"xl"}
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
        <Tbody>
          <Tr>
            <Td>David</Td>
            <Td>9 April 2019</Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
            <Td>19 May 2019</Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Tuscaloosa D3</Td>
            <Td>29 June 2019</Td>
            <Td>
              <Button>Delete</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
}
