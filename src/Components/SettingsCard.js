import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";

const alertSuccess = () => {
  toast.success("Successfully Updated!", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
const alertEmptyString = () => {
  toast.error("Please Set a Code.", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
const alertError = () => {
  toast.error("There was a problem.", {
    position: "top-center",
    style: {
      padding: "1.5rem",
    },
  });
};
function SettingsPanel(props) {
  const [partner, setPartner] = useState("");
  function handleAlert(alertType) {
    console.log(alertType, "HEY");
    props.onChange.handlePartnerUpdate(alertType);
  }

  function submitPartner() {
    localStorage.setItem("partner", partner);
    const user = localStorage.getItem("email");
    const partnerLocal = localStorage.getItem("partner");
    if (partner !== "") {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/UpdatePartner/`, {
          params: { user: user, partner: partnerLocal },
        })
        .then(function (response) {
          console.log("response", response);
          alertSuccess();
        })
        .catch(function (error) {
          console.log(error);
          alertError();
        });
    } else {
      alertEmptyString();
    }

    setPartner("");
  }

  return (
    <div class="card mx-auto    shadow bg-base-100">
      {" "}
      <div class="card-body text-black">
        <h2 class="card-title text-primary">Settings</h2>
        <div class="form-control m-1">
          <div class="relative">
            <input
              value={partner}
              type="text"
              onChange={(e) => setPartner(e.target.value)}
              placeholder="New Code"
              class="w-full pr-16 input input-primary input-bordered"
              onfocus="blur();"
            />
            <button
              onClick={submitPartner}
              class="absolute right-0 rounded-l-none btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>{" "}
        <div class="form-control m-1">
          <div class="relative"></div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default SettingsPanel;
