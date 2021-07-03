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
const alertLike = () => {
  toast.success("Liked", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
const loadingAlert = () => {
  toast.promise(getList(), {
    loading: "Loading...",
    success: <b>Loading Complete</b>,
    error: <b>Could not load names.</b>,
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
function BoyCard() {
  const [list, setList] = useState([]);
  const [loader, setLoader] = useState("loading");
  const characters = list;
  const [swiper, setSwiper] = useState(null);
  let mounted = false;
  useEffect(() => {
    mounted = true;
    loadingAlert();
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
      .get(`${process.env.REACT_APP_BASE_URL}/api/UpdateList/`, {
        params: {
          choice: choice.currentTarget.id,
          name: choice.currentTarget.dataset.name,
          userID: userID,
        },
      })
      .then(function (response) {
        console.log("response", response);

        alertLike();
        return response;
      })
      .catch(function (error) {
        console.log(error);
        alertError();
      });
  }
  const findNumber = (string) => {
    console.log(string);
  };
  let style = {
    top: "50%",
  };
  function Loader() {
    if (loader === "loading") {
      return (
        <div class="w-full h-full fixed block top-0 left-0 ">
          <span
            class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
            style={style}
          >
            <i class="fas fa-circle-notch fa-spin fa-5x">
              {" "}
              <ImSpinner6 className="icon-spin" size={70}></ImSpinner6>
            </i>
          </span>
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
        <SwiperSlide key={i}>
          <div className="card  shadow-lg bg-base-100">
            <div class="card-body ">
              <h2 class="card-title text-primary text-4xl">{character.name}</h2>

              <p>{character.meaning}</p>
              <p></p>
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
