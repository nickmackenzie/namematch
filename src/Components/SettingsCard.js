import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import { themeChange } from "theme-change";
function SettingsPanel() {
  const [partner, setPartner] = useState("");
  let curCode = "test";

  function submitPartner() {
    localStorage.setItem("partner", partner);
    const user = localStorage.getItem("person");
    const partnerLocal = localStorage.getItem("partner");
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/UpdatePartner/`, {
      params: { user: user, partner: partnerLocal },
    });

    setPartner("");
  }
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div class="card mx-auto    shadow bg-base-100">
      {" "}
      <div class="card-body text-black">
        <h2 class="card-title text-primary">Settings</h2>
        <p className="m-2 text-secondary">Current Code: {curCode}</p>
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
          <div class="relative"></div>
        </div>
        <div class="form-control m-1">
          <div class="form-control w-50">
            <label class="cursor-pointer label">
              <p className="m-2 text-secondary">Current Theme:</p>
              <br></br>
              <select
                class='select select-bordered select-secondary  max-w-xs"'
                data-choose-theme
              >
                <option value="cupcake">Cupcake</option>
                <option value="dark">Dark</option>
                <option value="dracula">Dracula</option>

                <option value="cyberpunk">Cyberpunk</option>
                <option value="light">Light</option>
                <option value="luxury">luxury</option>
                <option value="fantasy">fantasy</option>
                <option value="pastel">pastel</option>
                <option value="pink">Pink</option>

                <option value="emerald">emerald</option>
                <option value="light">Light</option>
                <option value="retro">retro</option>
                <option value="wireframe">wireframe</option>
                <option value="black">black</option>
                <option
                  value="forest
"
                >
                  {" "}
                  forest
                </option>

                <option value="forest">forest</option>
                <option value="light">Light</option>
                <option value="pink">Pink</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
