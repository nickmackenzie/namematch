import React, { useState } from "react";


function NavBar(props) {

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        console.log('test',event.target.id)
        props.onChange(event.target.id);
    }




  return (

<div className="navbar mb-2 shadow-lg bg-base-100 text-base-content rounded-box">
  <div className="flex-none px-2 mx-2">
    <span className="text-lg font-bold">
NameMatch
          </span>
  </div> 
  <div className="flex-1 px-2 mx-2">
    <div className="items-stretch hidden lg:flex">
      <a id='boy' onClick={handleChange} className="btn btn-ghost btn-sm rounded-btn">
              Boy Names
            </a> 
      <a id='girl' onClick={handleChange} className="btn btn-ghost btn-sm rounded-btn">
              Girl Names
            </a> 
      <a id='matches' onClick={handleChange} className="btn btn-ghost btn-sm rounded-btn">
              Matches
            </a> 
      <a id='settings' onClick={handleChange} className="btn btn-ghost btn-sm rounded-btn">
              Settings
            </a>
    </div>
  </div> 
  <div className="flex-none">

  </div> 
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> 
      </svg>
    </button>
  </div>
</div>
  );
}
export default NavBar;
