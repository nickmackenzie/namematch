import React, { useState, useEffect, useRef } from "react";
import { createUser } from "../helpers/SignInHelper";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    createUser(email, password).then((user) => {
      if (user != false) {
        window.location.href = "/";
      } else {
        alert("user already made");
      }
    });
  };

  return (
    <div class="lg:flex">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12"></div>
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold"
          >
            Sign Up
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
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Enter your password"
              />
            </div>

            <div class="mt-10">
              <button onClick={submitValue} className="btn btn-primary">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
