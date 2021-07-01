import React, { useState } from "react";
import { loginUser } from "../helpers/SignInHelper";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitValue = () => {
    loginUser(email, password).then((user) => {
      console.log("user", user);
      if (user !== false) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("email", user.email);
        window.location.href = "/namematch";
      } else {
        alert("user not found");
      }
    });
  };

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="flex-col justify-center hero-content lg:flex-row">
        <div class="text-center lg:text-left">
          <h1 class="mb-5 text-5xl font-bold">NameMatch</h1>
          <p class="mb-5">The App For Expecting Couples</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
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
                Login
              </button>
            </div>
            <label class="label">
              <a href="#" href="/signup" class="label-text-alt">
                Don't Have an Account?{" "}
                <span className="text-primary"> Sign Up!</span>
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
