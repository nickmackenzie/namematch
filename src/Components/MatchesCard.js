import React, { useState, useEffect } from "react";
//import { getLikesUser, getMatches, delName } from "../utils/getNameData";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { getLikesUser, getMatches, getLikes } from "../helpers/matchHelper";
import DataTable from "react-data-table-component";
import "swiper/swiper.scss";
import { compareAsc, format } from "date-fns";

const columns = [
  {
    name: "Like",
  },
];

function MatchPanel() {
  const [likes, setLikes] = useState([]);
  const [matches, setMatches] = useState([]);
  const [delIndex, setDelIndex] = useState([]);

  let needsUpdated = true;
  let letPass = true;

  // const deleteName = (input, id) => {

  //   //input.target.id
  //   setDelIndex(id.like);
  //   delName(delIndex).then((items) => {

  //     //  setLikes(items);
  //   });
  // };
  useEffect(() => {
    const nameData = localStorage.getItem("email");

    if (letPass) {
      getLikes(nameData).then((likesData) => {
        setLikes(likesData.data);
        console.log("matches", likes[0]);
      });

      letPass = false;
    }
  }, []);

  function renderTable() {
    return likes.map((like, i) => (
      <tr key={i}>
        <th> {like.name}</th>
        <td>{like.sex}</td>
        <td>{format(new Date(like.dateCreated), "EEEE MMM do yyyy")}</td>
      </tr>
    ));
  }
  return (
    <div class="overflow-x-auto shadow round bg-base-300">
      <table class="table striped w-full bg-base-300 shadow round">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sex</th>
            <th>Liked On</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
export default MatchPanel;
