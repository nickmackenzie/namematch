import React, { useState, useEffect, useRef } from "react";
import { createUser } from "../helpers/SignInHelper";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";

const accountCreatedSuccessAlert = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      } max-w-md  w-full bg-base-content shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Player
              mode="bounce"
              background="transparent"
              autoplay
              speed="1.5"
              keepLastFrame
              src="https://assets3.lottiefiles.com/packages/lf20_ApoETF.json"
              style={{ height: "72px", width: "48px" }}
            ></Player>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-2xl  text-base-100 mt-4">Creating Account</p>
          </div>
        </div>
      </div>
    </div>
  ));
};
const userFoundAlert = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "fade-in-fwd" : "fade-out-bck"
      }    card round bg-base-content bg-opacity-40 shadow-lg rounded-lg pointer-events-auto `}
    >
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets6.lottiefiles.com/packages/lf20_f1cFsO.json"
          style={{ height: "75px", width: "75px" }}
        ></Player>
        <p className="text-base-content">E-mail Taken</p>
      </div>
    </div>
  ));
};
const creatingAccountAlert = () => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md  w-full bg-base-content shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <Player
              mode="bounce"
              background="transparent"
              autoplay
              speed="1"
              keepLastFrame
              src="https://assets4.lottiefiles.com/packages/lf20_gzoqde3x.json"
              style={{ height: "75px", width: "75px" }}
            ></Player>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-lg  text-base-100 mt-4">Creating Account</p>
          </div>
        </div>
      </div>
    </div>
  ));
};
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    createUser(email, password).then((user) => {
      if (user !== false) {
        creatingAccountAlert();
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        userFoundAlert();
        return user;
      }
    });
  };

  return (
    <div class="hero min-h-screen bg-base-200">
      <Toaster></Toaster>
      <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
          <h1 class="mb-5 text-5xl font-bold">Create a Name Match Account</h1>
          <p class="mb-5">
            Create an Account to match baby names with your partner.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                class="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
                class="input input-bordered"
                required
                type="email"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder=""
                class="input input-bordered"
                minlength="8"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-control mt-6 mb-3">
              <button
                type="button"
                value="Login"
                class="btn btn-primary"
                classNameName="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Enter your password"
                onClick={submitValue}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
