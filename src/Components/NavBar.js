import React, { useState } from "react";

import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";

function NavBar(props) {
  function handleLogout(event) {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/";
  }
  function lightDarkMode(event) {
    console.log(event.currentTarget);
    if (event.currentTarget.type === "checkbox") {
      event.currentTarget.type = "checked";
      localStorage.setItem("theme", "dark");
      let htmlSelect = document.getElementsByTagName("html");

      htmlSelect[0].dataset.theme = "dark";
    } else {
      console.log("else");
      event.currentTarget.type = "checkbox";
      localStorage.setItem("theme", "cupcake");
      let htmlSelect = document.getElementsByTagName("html");

      htmlSelect[0].dataset.theme = "cupcake";
    }
  }

  return (
    <div className="navbar    b w-auto sm:w-1/2  mx-auto text-base-content rounded-box ">
      <div className="flex-1 px-2 mx-2">
        <strong>Name Match</strong>{" "}
      </div>
      <div className="flex-none">
        <div class="p-6">
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text"></span>
              <div>
                <input
                  onClick={lightDarkMode}
                  type="checkbox"
                  checked="checked"
                  class="toggle"
                  readonly="readonly"
                />

                <span class="toggle-mark"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={handleLogout}>
          <FaSignOutAlt size={23} />
        </button>
      </div>
    </div>
  );
}
export default NavBar;
