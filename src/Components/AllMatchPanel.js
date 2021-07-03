import React, { useState, useEffect } from "react";
//import { getLikesUser, getMatches, delName } from "../utils/getNameData";
import { Swiper, SwiperSlide } from "swiper/react";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { getLikesUser, getMatches } from "../helpers/matchHelper";

import "swiper/swiper.scss";
function AllMatchPanel() {
  const [likes, setLikes] = useState([]);

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
      getLikesUser(nameData).then((likes) => {
        setLikes(likes);
      });

      letPass = false;
    }
  }, []);

  return (
    <div class="">
      <div class="py-2 align-middle inline-block">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="table w-full">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-bold text-base-content uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-bold text-base-content uppercase tracking-wider"
                >
                  Sex
                </th>
              </tr>
            </thead>
            <tbody class="bg-base-100 h-96 text-base-content rounded-box  divide-y divide-base-content">
              {likes.map((like, i) => (
                <tr key={i}>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <CgGenderFemale size={48}></CgGenderFemale>
                      </div>
                      <div class="ml-4">
                        <div class="text-lg font-medium text-base-content0">
                          {like}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {/* <div id={i} class="badge badge-error m-2">
                      Remove
                    </div> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AllMatchPanel;
