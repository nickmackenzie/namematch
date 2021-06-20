import React, { useState, useEffect,useRef } from "react";
//import {getPos,getList} from '../utils/getNameData'
import { Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFemale, faMale,faHeart ,faHeartBroken} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function BoyCard() {
    const [list, setList] = useState([]);

    const characters = list;

    let mounted = false;
    // useEffect(() => {

    //   let mounted = true;
    //   const userID = localStorage.getItem("person");
    //   const blackList = localStorage.getItem("blackList");
    //   const loadedMain = localStorage.getItem("loadedMain");

    //   if(loadedMain){

    //     getList().then((items) => {
    //       if (mounted) {
          
    //         setList(items);
    //       }
    //     }); 
   
    //   }

    //   return () => (mounted = false);
    // }, []);



    // function likeOrDislike(choice){

    //     const userID = localStorage.getItem("person");
    //     axios
    //     .get(`${process.env.REACT_APP_BASE_URL}/api/UpdateList/`, {
    //       params: { choice: choice.target.id,name:choice.target.dataset.name,userID: userID},
    //     })
    //   }
    //   const findNumber =(string)=>{
    //     console.log(string)
    //   }


    //   const swiper = useRef(null)
    return (
      
     <div class='h-96 mx-auto'>Girl Card

  
      </div>
    )}
    export default BoyCard;