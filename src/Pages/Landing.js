import React, { useState } from "react";
import { loginUser } from "../helpers/SignInHelper";
import loginIllustration from "../imgs/loginIllustration.svg";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";
import SignIn from "./SignIn";

const alertLoginSuccess = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } card round bg-base-content bg-opacity-30 shadow-lg rounded-lg pointer-events-auto`}
    >
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets3.lottiefiles.com/packages/lf20_ApoETF.json"
          style={{ height: "100px", width: "100px" }}
        ></Player>
      </div>
    </div>
  ));
};

const userNotFoundAlert = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } card round bg-base-content bg-opacity-40 shadow-lg rounded-lg pointer-events-auto`}
    >
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets4.lottiefiles.com/packages/lf20_ndk1Mk.json"
          style={{ height: "48px", width: "48px" }}
        ></Player>
      </div>

      <p className="text-lg  text-base-100 p-4">
        Username or Password is Wrong
      </p>
    </div>
  ));
};
const emptyFieldAlert = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } card round bg-base-content bg-opacity-40 shadow-lg rounded-lg pointer-events-auto`}
    >
      <div className="p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets6.lottiefiles.com/packages/lf20_f1cFsO.json"
          style={{ height: "80px", width: "80px" }}
        ></Player>
      </div>

      <p className="text-base-content m-2">
        Please enter an
        <br /> email and password
      </p>
    </div>
  ));
};
function Landing() {
  const [email, setEmail] = useState("");

  return <SignIn></SignIn>;
}
export default Landing;
