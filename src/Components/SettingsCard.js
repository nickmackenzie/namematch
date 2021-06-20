import React, { useState } from "react";
import axios from "axios";
import { useEffect } from 'react';


function SettingsPanel() {
  const [partner, setPartner] = useState("");
let curCode = "test"

  function submitPartner() {

    localStorage.setItem("partner", partner);
    const user = localStorage.getItem("person");
    const partnerLocal = localStorage.getItem("partner");
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/UpdatePartner/`, {
      params: { user: user, partner: partnerLocal },
    });

    setPartner("");
  }


  return (
    <div class="w-96  mx-auto">
      <div class="card-body text-black">
        <h2 class="card-title">Settings</h2>
        <p className="m-2">Current Code: {curCode}</p>
        <div class="form-control m-1">
          <div class="relative">
            <input
              value={partner}
              type="text"
              onChange={(e) => setPartner(e.target.value)}
              placeholder="New Code"
              class="w-full pr-16 input input-primary input-bordered"
            />
            <button
              onClick={submitPartner}
              class="absolute right-0 rounded-l-none btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
        <div class="form-control m-1">
          <div class="relative">

          </div>
        </div>
        <div class="form-control m-1">
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">Sounds</span>
              <div>
                <input
                  type="checkbox"
                  checked="checked"
                  class="toggle toggle-primary"
                />
                <span class="toggle-mark"></span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;