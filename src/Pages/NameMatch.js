import React, { useState, useEffect } from "react";
import { fetchUser } from "../helpers/SignInHelper";
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
import toast, { Toaster } from "react-hot-toast";
import { getList, getGirlList } from "../helpers/getNameData";
import { getGif } from "../helpers/giphyHelper.js";
import "swiper/swiper-bundle.css";
import LoadingCard from "../Components/LoadingCard";
import axios from "axios";

/* Styles */
const style = css`
  display: none;
`;

function NameMatch() {
  const [view, setView] = useState("boy");
  const [alert, showAlert] = useState(false);
  const [alertType, setType] = useState("success");

  const [list, setList] = useState([]);
  const [girlList, setGirlList] = useState([]);
  const [loader, setLoader] = useState("loading");
  const characters = list;
  const [swiper, setSwiper] = useState(null);
  let mounted = false;

  function GetGif() {
    getGif().then((gif) => {
      console.log("gif", gif);
    });
  }
  useEffect(() => {
    mounted = true;
    if (view === "boy") {
      getList().then((items) => {
        if (mounted) {
          setList(items);
          setLoader("done");
        }
      });
    } else if (view === "girl") {
      getGirlList().then((items) => {
        if (mounted) {
          setGirlList(items);
          setLoader("done");
        }
      });
    }

    return () => (mounted = false);
  }, []);

  function Loader() {
    if (loader === "loading") {
      return (
        <Flex align="center" justify="center" marginTop="20">
          <Spinner
            thickness="8px"
            speed="0.65s"
            emptyColor="gray.200"
            color="red.500"
            size="xl"
          ></Spinner>
        </Flex>
      );
    } else {
      return true;
    }
  }

  const slideTo = (index) => swiper.slideTo(index);
  function likeOrDislike(choice) {
    const userID = localStorage.getItem("email");

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/LikeName/`, {
        params: {
          meaning: choice.currentTarget.id,
          name: choice.currentTarget.dataset.name,
          email: userID,
          sex: "boy",
        },
      })
      .then(function (response) {
        console.log("response", response);
        if (response.data) {
          loadingAlert();
          return response;
        }
      })
      .catch(function (error) {
        console.log(error);
        alertError();
      });
  }

  let currentDisplay;
  function handlePartnerUpdate(newView) {
    console.log("Handling Partner Update");
    showAlert(true);
    setType("success");
  }
  function handleChange(newView) {
    setView(newView);

    if (newView === "girl") {
      setLoader("loading");
      getGirlList().then((items) => {
        setList([]);
        setGirlList(items);
        setLoader("done");
      });
    } else if (newView === "boy") {
      setLoader("loading");

      getList().then((items) => {
        setGirlList([]);
        setList(items);
        setLoader("done");
      });
    }
  }
  function handleAlert(alertType) {
    showAlert(true);
    setType(alertType);
  }
  const alertError = () => {
    toast.error("Error", {
      position: "top-center",
      style: {
        padding: "1.5rem",
      },
    });
  };

  const loadingAlert = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "fade-in-fwd" : "fade-out-bck"
        } max-w-md  w-full`}
      >
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="2"
          keepLastFrame
          src="https://assets10.lottiefiles.com/packages/lf20_QBlCSK.json"
        ></Player>
      </div>
    ));
  };
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
    currentDisplay = girlList.map((character, i) => (
      <Box key={i}>
        <SwiperSlide>
          <Box>
            <Advanced
              name={character.name}
              meaning={character.meaning}
            ></Advanced>
          </Box>
        </SwiperSlide>
      </Box>
    ));
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
    currentDisplay = characters.map((character, i) => (
      <Box>
        <SwiperSlide key={i}>
          <Box>
            <Advanced
              name={character.name}
              meaning={character.meaning}
            ></Advanced>
          </Box>
        </SwiperSlide>
      </Box>
    ));
  }

  return (
    <Container>
      <Alert alert={alertType} show={alert}></Alert>
      <Center> </Center>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {currentDisplay} <Loader></Loader>
      </Swiper>

      <Box>
        <BottomNav view={view} onChange={handleChange}></BottomNav>
      </Box>
    </Container>
  );
}
export default NameMatch;
