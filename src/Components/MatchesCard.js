import React, { ChangeEvent, useEffect, useState } from "react";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
  Paginator,
  Previous,
  Next,
  setCurrentPage,
  currentPage,
  PageGroup,
  usePaginator,
  pagesQuantity,
} from "chakra-paginator";
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
  const FC = () => {
    const pagesQuantity = 12;
    const { currentPage, setCurrentPage } = usePaginator({
      initialState: { currentPage: 1 },
    });
  };
  return (
    <>
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
              <Td>Tablescon</Td>
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
      <Paginator
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      >
        <Container align="center" justify="space-between" w="full" p={4}>
          <Previous>Previous</Previous>
          <PageGroup isInline align="center" />
          <Next>Next</Next>
        </Container>
      </Paginator>
    </>
  );
}
