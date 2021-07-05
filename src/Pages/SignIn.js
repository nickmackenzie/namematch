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
      } pointer-events-auto`}
    >
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets1.lottiefiles.com/packages/lf20_wwcnpl4u.json"
          style={{ height: "150px", width: "150px" }}
        ></Player>
      </div>
    </div>
  ));
};

const userNotFoundAlert = () => {
  toast.custom((t) => (
    <div className={`${t.visible ? "fade-in-fwd" : "fade-out-bck"} `}>
      <div className="m-2 p-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets8.lottiefiles.com/packages/lf20_K3XjOi.json"
          style={{ height: "60px", width: "60px" }}
        ></Player>
      </div>
    </div>
  ));
};
const emptyFieldAlert = () => {
  toast.custom((t) => (
    <div className={`${t.visible ? "fade-in-fwd" : "fade-out-bck"} `}>
      <div className="m-2">
        <Player
          mode="bounce"
          background="transparent"
          autoplay
          speed="1"
          keepLastFrame
          src="https://assets8.lottiefiles.com/packages/lf20_K3XjOi.json"
          style={{ height: "60px", width: "60px" }}
        ></Player>
      </div>
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
            }, 2000);
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
