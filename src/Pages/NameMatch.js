import React, { useState, useEffect } from "react";
import { fetchUser } from "../helpers/SignInHelper";
import NavBar from "../Components/NavBar";
import BoyCard from "../Components/BoyCard";
import GirlCard from "../Components/GirlCard";
import SettingsCard from "../Components/SettingsCard";
import MatchesCard from "../Components/MatchesCard.js";
import BottomNav from "../Components/BottomNav";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

function NameMatch() {
  const [view, setView] = useState("boy");
  let currentDisplay;
  function handleChange(newView) {
    setView(newView);
  }

  useEffect(() => {
    let userEmail = localStorage.getItem("email");
    fetchUser(userEmail).then((user) => {
      if (user != false) {
        console.log("user found");
      } else {
        alert("user not found");
      }
    });
  }, []);
  if (view === "girl") {
    currentDisplay = <GirlCard></GirlCard>;
  } else if (view === "matches") {
    currentDisplay = <MatchesCard></MatchesCard>;
  } else if (view === "settings") {
    currentDisplay = <SettingsCard></SettingsCard>;
  } else {
    currentDisplay = <BoyCard></BoyCard>;
  }

  return (
    <div className="bg-base-300 h-screen p-3">
      <div className="container mx-auto">
        <NavBar></NavBar>

        <div className="mx-auto">{currentDisplay}</div>
      </div>
      <BottomNav view={view} onChange={handleChange}></BottomNav>
    </div>
  );
}
export default NameMatch;
