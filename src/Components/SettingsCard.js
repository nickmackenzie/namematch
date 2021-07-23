import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";
import { Input, Button } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const alertSuccess = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } pointer-events-auto`}
    >
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets1.lottiefiles.com/packages/lf20_wwcnpl4u.json"
          style={{ height: "150px", width: "150px" }}
        ></Player>
      </div>
    </div>
  ));
};
const alertEmptyString = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } max-w-md  w-full bg-base-200 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Player
              mode="bounce"
              background="transparent"
              autoplay
              keepLastFrame
              src="https://assets3.lottiefiles.com/packages/lf20_VnOIrj.json"
              style={{ height: "48px", width: "48px" }}
            ></Player>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-lg font-medium text-error align-center">
              New Code Can Not Be Blank.
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};
const alertError = () => {
  toast.error("There was a problem.", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
function SettingsPanel(props) {
  const [partner, setPartner] = useState("");
  function handleAlert(alertType) {
    console.log(alertType, "HEY");
    props.onChange.handlePartnerUpdate(alertType);
  }

  function submitPartner() {
    localStorage.setItem("partner", partner);
    const user = localStorage.getItem("email");
    const partnerLocal = localStorage.getItem("partner");
    if (partner !== "") {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/UpdatePartner/`, {
          params: { user: user, partner: partnerLocal },
        })
        .then(function (response) {
          console.log("response", response);
          alertSuccess();
        })
        .catch(function (error) {
          console.log(error);
          alertError();
        });
    } else {
      alertEmptyString();
    }

    setPartner("");
  }

  return (
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Setting</Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          Set your Partner code here. ✌️
        </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="password">
            <FormLabel>Partner Code</FormLabel>
            <Input
              value={partner}
              type="text"
              onChange={(e) => setPartner(e.target.value)}
              placeholder="New Code"
              class="w-full pr-16 input input-primary input-bordered text-1xl "
              onfocus="blur();"
            />
          </FormControl>
          <Stack spacing={2}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            ></Stack>
            <Button
              onClick={submitPartner}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Save New Code
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default SettingsPanel;
