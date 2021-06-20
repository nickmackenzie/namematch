import React, { useState } from "react";
import { loginUser } from "../helpers/SignInHelper";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    loginUser(email, password).then((user) => {
        console.log('user',user)
      if (user != false) {

        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "/namematch";
      } else {
        alert("user not found");
      }
    });
  };

  return (
    <div class="lg:flex">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12"></div>
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            class="text-center text-4xl text-primary font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold"
          >
            Log in
          </h2>
          <div class="mt-12">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Email Address
              </div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="mike@gmail.com"
              />
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
                <div>
                  <a
                    class="text-xs font-display font-semibold text-error hover:text-indigo-800
                                    cursor-pointer"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div class="mt-10">
              <button onClick={submitValue} class="btn btn-primary">
                Sign In
              </button>
            </div>

            <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              <a
                href="/signup"
                className="cursor-pointer text-primary hover:text-indigo-800"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div class="">
          <img src="../temp.svg"></img>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
