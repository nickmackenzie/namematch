import React, { useState, useEffect } from "react";
import { fetchUser } from "../helpers/SignInHelper";
import {
  Stack,
  HStack,
  VStack,
  Box,
  StackDivider,
  Container,
} from "@chakra-ui/react";
import { jsx, css } from "@emotion/react";
import NavBar from "../Components/NavBar";
import BoyCard from "../Components/BoyCard";
import GirlCard from "../Components/GirlCard";
import SettingsCard from "../Components/SettingsCard";
import MatchesCard from "../Components/MatchesCard.js";
import BottomNav from "../Components/BottomNav";
import AllMatchPanel from "../Components/AllMatchPanel";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import Advanced from "../Components/Advanced";
import Alert from "../Components/Alert";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Swiper, SwiperSlide } from "swiper/react";
/* Styles */
const style = css`
  display: none;
`;

function NameMatch() {
  const [view, setView] = useState("boy");
  const [alert, showAlert] = useState(false);
  const [alertType, setType] = useState("success");

  let currentDisplay;
  function handlePartnerUpdate(newView) {
    console.log("Handling Partner Update");
    showAlert(true);
    setType("success");
  }
  function handleChange(newView) {
    setView(newView);
  }
  function handleAlert(alertType) {
    showAlert(true);
    setType(alertType);
  }
  useEffect(() => {
    let userEmail = localStorage.getItem("email");
    fetchUser(userEmail).then((user) => {
      if (user != false) {
        console.log("user found");
        return user;
        console.log("asdfasdf");
      } else {
        alert("user not found");
      }
    });
  }, []);
  if (view === "girl") {
    currentDisplay = <GirlCard></GirlCard>;
  } else if (view === "matches") {
    currentDisplay = (
      <div className="d-flex">
        <MatchesCard></MatchesCard>
      </div>
    );
  } else if (view === "settings") {
    currentDisplay = (
      <SettingsCard onChange={handlePartnerUpdate}></SettingsCard>
    );
  } else {
    currentDisplay = <Advanced></Advanced>;
  }

  return (
    <Container>
      <Alert alert={alertType} show={alert}></Alert>
      <NavBar h="40px"></NavBar>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <Box>{currentDisplay}</Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>{currentDisplay}</Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>{currentDisplay}</Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>{currentDisplay}</Box>
        </SwiperSlide>
      </Swiper>
      <Box> </Box>

      <Box>
        <BottomNav view={view} onChange={handleChange}></BottomNav>
      </Box>
    </Container>
  );
}
export default NameMatch;
