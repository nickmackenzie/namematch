import React, { useState, useEffect, useRef } from "react";
//import {getPos,getList} from '../utils/getNameData'
import { ImHeart, ImHeartBroken } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { getList } from "../helpers/getNameData";
import "swiper/swiper-bundle.css";
import Loader from "react-loader-spinner";
import Spinner from "../spinner.svg";
import { ImSpinner6 } from "react-icons/im";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";

const alertLike = () => {
  toast.success("Liked", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};

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
function BoyCard() {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState("loading");
  const characters = list;
  const [swiper, setSwiper] = useState(null);
  let mounted = false;
  useEffect(() => {
    mounted = true;

    getList().then((items) => {
      if (mounted) {
        setList(items);
        setLoader("done");
      }
    });

    return () => (mounted = false);
  }, []);
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
  const findNumber = (string) => {
    console.log(string);
  };

  function Loader() {
    if (loader === "loading") {
      return (
        <div className="container h-1/3">
          <SwiperSlide>
            <div className="card h-80 w-1/2  bg-base-100  mx-auto">
              <div class="card-body ">
                <h2 class="card-title text-primary text-4xl">Loading...</h2>

                <p></p>
                <div className="card-actions">
                  <button class="btn btn-outline btn-secondary btn-circle btn-lg hover:bg-secondary">
                    <ImHeart size={48} />
                  </button>
                  <button class="btn btn-outline btn-error btn-circle btn-lg">
                    {" "}
                    <ImHeartBroken size={48}></ImHeartBroken>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      );
    } else {
      return true;
    }
  }

  //   const swiper = useRef(null)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={setSwiper}
    >
      {" "}
      <Loader></Loader>
      {characters.map((character, i) => (
        <SwiperSlide key={i} className="w-96 ">
          <div className="card w-1/2 bg-base-100  mx-auto">
            <div class="card-body ">
              <div class="card-title text-primary text-4xl">
                {character.name}
              </div>

              <p className="">{character.meaning}</p>

              <div className="card-actions">
                <button
                  class="btn btn-outline btn-secondary btn-circle btn-lg hover:bg-secondary"
                  id="like"
                  data-name={character.name}
                  onClick={likeOrDislike}
                >
                  <ImHeart size={48} />
                </button>
                <button
                  class="btn btn-outline btn-error btn-circle btn-lg"
                  id="dislike"
                  data-name={character.name}
                  onClick={likeOrDislike}
                >
                  {" "}
                  <ImHeartBroken size={48}></ImHeartBroken>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <Toaster></Toaster>
    </Swiper>
  );
}
export default BoyCard;
