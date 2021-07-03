import React, { useState } from "react";

import { FaSignOutAlt, FaRegMoon } from "react-icons/fa";
import { sendAlert } from "../helpers/alertHelper";

function Alert(props) {
  console.log("props", props);
  function handleAlert(event) {
    // Here, we invoke the callback with the new value
    console.log("test", event.currentTarget.id);
    props.onChange(event.currentTarget.id);
  }
  function alertTrigger() {
    if (props.show) {
      return (
        <div
          onChange={handleAlert}
          id="toast-container"
          class="alert alert-success toast-top-right"
        >
          <div class="flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-6 h-6 mx-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              ></path>
            </svg>
            <label>Updated!</label>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  return alertTrigger();
}
export default Alert;
