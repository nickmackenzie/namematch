import React, { useState } from "react";

import { FaSignOutAlt } from "react-icons/fa";

import { IoFemaleSharp, IoMaleSharp } from "react-icons/io5";
import { GiLovers } from "react-icons/gi";

import { BiCog } from "react-icons/bi";
function NavBar(props) {
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    console.log("test", event.currentTarget.id);
    props.onChange(event.currentTarget.id);
  }

  function handleLogout(event) {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/";
  }

  return (
    <section
      id="bottom-navigation m-3"
      class="block card m-4 mx-auto static inset-x-0 bottom-0 z-10 bg-white shadow navbar  m-6 shadow-lg bg-base-100 text-base-content rounded-box"
    >
      <div id="tabs" class="flex justify-between">
        <a
          id="boy"
          onClick={handleChange}
          class="w-full cursor-pointer focus:color-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 flex flex-col items-center"
        >
          <IoMaleSharp size={"2rem"}> </IoMaleSharp>

          <span class="tab tab-home block text-xs">Boy Names</span>
        </a>
        <a
          id="girl"
          onClick={handleChange}
          class="w-full cursor-pointer focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 flex flex-col items-center"
        >
          <IoFemaleSharp size={"2rem"}></IoFemaleSharp>
          <span class="tab tab-kategori block text-xs">Girl Names</span>
        </a>
        <a
          id="matches"
          onClick={handleChange}
          class="w-full cursor-pointer focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 flex flex-col items-center"
        >
          <GiLovers size={"2rem"}></GiLovers>
          <span class="tab tab-explore block text-xs">Matches</span>
        </a>
        <a
          id="settings"
          onClick={handleChange}
          class="w-full cursor-pointer focus:text-teal-500 hover:text-primary justify-center inline-block text-center pt-2 pb-1 flex flex-col items-center"
        >
          <BiCog className="" size={"2rem"}></BiCog>
          <span class="tab tab-whishlist block text-xs">Settings</span>
        </a>
      </div>
    </section>
  );
}
export default NavBar;
