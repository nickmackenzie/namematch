import React, { useState } from "react";

import { FaSignOutAlt } from "react-icons/fa";

function NavBar(props) {
  function handleLogout(event) {
    localStorage.setItem("isAuthenticated", false);
    window.location.href = "/";
  }

  return (
    <div className="navbar mb-2 shadow-lg bg-base-100 text-base-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">NameMatch</span>
      </div>
      <div className="flex-1 px-2 mx-2"></div>
      <div className="flex-none"></div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={handleLogout}>
          <FaSignOutAlt size={23} />
        </button>
      </div>
    </div>
  );
}
export default NavBar;
