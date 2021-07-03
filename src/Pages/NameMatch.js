import React, { useState, useEffect } from "react";
import { fetchUser } from "../helpers/SignInHelper";
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

function NameMatch() {
  const [view, setView] = useState("boy");
  const [alert, showAlert] = useState(false);
  const [alertType, setType] = useState("success");

  let currentDisplay;
  function handlePartnerUpdate(newView) {
    console.log("Handling Partner Update");
    showAlert(true);
    setType("success");
  }
  function handleChange(newView) {
    setView(newView);
  }
  function handleAlert(alertType) {
    showAlert(true);
    setType(alertType);
  }
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
    currentDisplay = <GirlCard></GirlCard>;
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
    currentDisplay = <BoyCard></BoyCard>;
  }

  return (
    <div className="bg-base-200 w-screen h-screen flex flex-col justify-between">
      <div className="container mx-auto ">
        <Alert alert={alertType} show={alert}></Alert>
        <NavBar></NavBar>

        <div className="flex justify-center">{currentDisplay}</div>
      </div>
      <BottomNav view={view} onChange={handleChange}></BottomNav>
    </div>
  );
}
export default NameMatch;
