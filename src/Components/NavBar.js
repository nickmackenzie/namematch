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
      localStorage.setItem("theme", "light");
      let htmlSelect = document.getElementsByTagName("html");

      htmlSelect[0].dataset.theme = "light";
    } else {
      console.log("else");
      event.currentTarget.type = "checkbox";
      localStorage.setItem("theme", "light");
      let htmlSelect = document.getElementsByTagName("html");

      htmlSelect[0].dataset.theme = "dark";
    }
  }

  return (
    <div className="navbar sticky mb-10 shadow-lg bg-base-100 mt-5 mb-5 text-base-content rounded-box ">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">NameMatch</span>
      </div>
      <div className="flex-1 px-2 mx-2"></div>
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
