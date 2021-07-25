import React from "react";
import {} from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import AllMatchPanel from "../Components/AllMatchPanel";
import MatchesCard from "../Components/MatchesCard";

export default function ChartSwitcher(props) {
  return (
    <Center>
      <Tabs
        variant="soft-rounded"
        colorScheme={useColorModeValue("red", "green")}
      >
        <TabPanels>
          <TabPanel>
            <p>
              <AllMatchPanel></AllMatchPanel>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              {" "}
              <MatchesCard></MatchesCard>
            </p>
          </TabPanel>
          <TabPanel>
            <p>
              {" "}
              <MatchesCard></MatchesCard>
            </p>
          </TabPanel>
        </TabPanels>
        <Center>
          <TabList
            mb="1em"
            bg="white"
            p="4"
            rounded={"xl"}
            bg={useColorModeValue("white", "gray.800")}
          >
            <Tab color={useColorModeValue("gray.800", "white")}>Likes</Tab>
            <Tab color={useColorModeValue("gray.800", "white")}>Matches</Tab>
            <Tab color={useColorModeValue("gray.800", "white")}>Dislikes</Tab>
          </TabList>
        </Center>
      </Tabs>
    </Center>
  );
}
