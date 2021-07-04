import React, { useState } from "react";
import { loginUser } from "../helpers/SignInHelper";
import loginIllustration from "../imgs/loginIllustration.svg";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { Player } from "@lottiefiles/react-lottie-player";
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
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    if (email != "" || password !== "") {
      loginUser(email, password)
        .then((user) => {
          console.log("user", user);
          if (user !== false) {
            alertLoginSuccess();
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("email", user.email);
            localStorage.setItem("theme", user.theme);
            let htmlSelect = document.getElementsByTagName("html");

            return user;
          } else {
            userNotFoundAlert();
            return user;
          }
        })
        .then((user) => {
          console.log("user", user);
          if (user !== false) {
            setTimeout(() => {
              window.location.href = "/namematch";
            }, 3000);
          } else {
            return false;
          }
        });
    } else {
      emptyFieldAlert();
    }
  };

  return (
    <div class="card-body p-3">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          type="email"
          required
          placeholder="email"
          class="input input-bordered"
          onChange={(e) => setEmail(e.target.value)}
          class="input input-bordered"
          placeholder=""
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="password"
          minlength="8"
          required
          placeholder=""
          class="input input-bordered"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label class="label">
          <a href="#" class="label-text-alt text-error">
            Forgot password?
          </a>
        </label>
      </div>
      <div class="form-control mt-1 mb-1">
        <button
          type="button"
          value="Login"
          class="btn btn-primary"
          classNameName="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="Enter your password"
          onClick={submitValue}
        >
          Login
        </button>
      </div>
      <label class="label">
        <a href="#" href="/signup" class="label-text-alt">
          Don't Have an Account? <span className="text-warning"> Sign Up!</span>
        </a>
      </label>
    </div>
  );
}
export default SignIn;
