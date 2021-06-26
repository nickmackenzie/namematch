import React, { useState, useEffect, useRef } from "react";
//import {getPos,getList} from '../utils/getNameData'
import { ImHeart, ImHeartBroken } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { getList } from "../helpers/getNameData";
import "swiper/swiper-bundle.css";

import axios from "axios";
function BoyCard() {
  const [list, setList] = useState([]);

  const characters = list;

  let mounted = false;
  useEffect(() => {
    mounted = true;

    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });

    return () => (mounted = false);
  }, []);

  function likeOrDislike(choice) {
    const userID = localStorage.getItem("email");
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/UpdateList/`, {
      params: {
        choice: choice.currentTarget.id,
        name: choice.currentTarget.dataset.name,
        userID: userID,
      },
    });
  }
  const findNumber = (string) => {
    console.log(string);
  };

  //   const swiper = useRef(null)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
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
                  <ImHeartBroken size={48}></ImHeartBroken>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default BoyCard;
