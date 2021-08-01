import React, { useState, useEffect, useContext } from "react";
import Tour from "reactour";

import { fetchUser } from "../helpers/SignInHelper";
import { jsx, css } from "@emotion/react";
import {
  Box,
  Spinner,
  Center,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

import Timeline from "../Components/Timeline";
import SettingsCard from "../Components/SettingsCard";

import BottomNav from "../Components/BottomNav";

import Advanced from "../Components/Advanced";
import Alert from "../Components/Alert";
import { Player } from "@lottiefiles/react-lottie-player";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
import toast, { Toaster } from "react-hot-toast";
import { getList, getGirlList } from "../helpers/getNameData";
import { getGif } from "../helpers/giphyHelper.js";
import "swiper/swiper-bundle.css";
import { Button, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import { EffectCube } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import AllLikePanel from "../Components/AllLikePanel";
import ChartSwitcher from "../Components/ChartSwitcher";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const steps = [
  {
    selector: ".nav",
    content: "Welcome to Name Match. Lets show you around.",
  },
  {
    selector: ".css-19gg9hj",
    content: "This a name card.",
  },
  {
    selector: ".css-1c7yk0v",
    content: "Click on the heart to like a name.",
  },
  {
    selector: ".css-1pq29zb",
    content:
      "Click on the broken heart to dislike a name. When you like or dislike a name, this will get saved to your portfolio.",
  },

  {
    selector: "#settings",
    content:
      "Next, Let's make a secret code to share with your partner so you can start to match your favorite names! Click on the cog to continue. ",
  },
];
const steps2 = [
  {
    selector: ".nav",
    content: "Welcome to Name Match. Lets show you around.",
  },
  {
    selector: ".css-19gg9hj",
    content: "This a name card.",
  },
  {
    selector: ".css-1c7yk0v",
    content: "Click on the heart to like a name.",
  },
  {
    selector: ".css-1pq29zb",
    content:
      "Click on the broken heart to dislike a name. When you like or dislike a name, this will get saved to your portfolio.",
  },

  {
    selector: "#settings",
    content:
      "Next, Let's make a secret code to share with your partner so you can start to match your favorite names! Click on the cog to continue. ",
  },
];
function NameMatch() {
  const [view, setView] = useState("boy");
  const [alert, showAlert] = useState(false);
  const [alertType, setType] = useState("success");

  const [list, setList] = useState([]);
  const [girlList, setGirlList] = useState([]);
  const [loader, setLoader] = useState("loading");
  const characters = list;
  const [swiper, setSwiper] = useState(null);
  const tour = useContext(ShepherdTourContext);

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
    setOpen(false);
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
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    let userEmail = localStorage.getItem("email");
    fetchUser(userEmail).then((user) => {
      if (user != false) {
        setOpen(false);
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
      <Box key={character}>
        <SwiperSlide>
          <Box>
            <Advanced
              name={character.name}
              meaning={character.meaning}
              picture={i + 3}
            ></Advanced>
          </Box>
        </SwiperSlide>
      </Box>
    ));
  } else if (view === "matches") {
    currentDisplay = (
      <>
        <ChartSwitcher></ChartSwitcher>
      </>
    );
  } else if (view === "settings") {
    currentDisplay = (
      <SettingsCard onChange={handlePartnerUpdate}></SettingsCard>
    );
  } else {
    currentDisplay = characters.map((character, i) => (
      <Box>
        <SwiperSlide key={character.name}>
          <Box>
            <Advanced
              name={character.name}
              meaning={character.meaning}
              picture={i}
            ></Advanced>
          </Box>
        </SwiperSlide>
      </Box>
    ));
  }
  let color = `bgGradient: "linear(to-r, red.500, yellow.500)"`;

  return (
    <Box
      style={{ height: "100vh", width: "100%", margin: "0 auto" }}
      bgGradient={useColorModeValue(
        "linear(to-t, #fff1eb, #ace0f9)",
        "linear(to-t, #09203f, #537895)"
      )}
    >
      <Alert alert={alertType} show={alert}></Alert>

      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        speed={500}
        navigation={{
          prevEl: ".nextBtn2",
          nextEl: ".nextBtn",
        }}
      >
        {currentDisplay} <Loader></Loader>
      </Swiper>

      <Box>
        <BottomNav view={view} class="nav" onChange={handleChange}></BottomNav>
        <Tour
          steps={steps}
          isOpen={isOpen}
          onRequestClose={() => setIsTourOpen(false)}
        />
      </Box>
    </Box>
  );
}
export default NameMatch;
