import React, { useState, useEffect, useRef } from "react";
import { createUser } from "../helpers/SignInHelper";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    createUser(email, password).then((user) => {
      if (user !== false) {
        window.location.href = "/";
      } else {
        alert("user already made");
      }
    });
  };

  return (

    <div class="hero min-h-screen bg-base-200">
      <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
          <h1 class="mb-5 text-5xl font-bold">Create a NameMatch Account</h1>
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
              type='email'
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type='password'
                type="text"
                placeholder=""
                class="input input-bordered"
                minlength="8" required
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
              >Sign In</button>
            </div>
    
      
          </div>
        </div>
      </div>
    </div>




  );
}
export default SignUp;
