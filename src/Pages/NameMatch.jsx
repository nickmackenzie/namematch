import React, { useState } from "react";
import NavBar from '../Components/NavBar'
import BoyCard from '../Components/BoyCard'
import GirlCard from '../Components/GirlCard'
import SettingsCard from '../Components/SettingsCard'
import MatchesCard from '../Components/MatchesCard.js'
function NameMatch() {
    const [view, setView] = useState("boy");
    let currentDisplay;
    function handleChange(newView) {
        setView(newView);
      }


    if(view === 'girl'){
        currentDisplay = ( <GirlCard></GirlCard>  )
       } else if (view === 'matches'){
        currentDisplay = ( <MatchesCard></MatchesCard> )
       } else if (view === 'settings') {
        currentDisplay = ( <SettingsCard></SettingsCard>  )
       } else {
        currentDisplay = ( <BoyCard></BoyCard>  )
       }


  return (
      <div className='container mx-auto mt-2 bg-base-100'>
<NavBar view={view} onChange={handleChange}></NavBar>
{currentDisplay}
</div>
  );
}
export default NameMatch;
