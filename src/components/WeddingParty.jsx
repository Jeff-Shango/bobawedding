import React from 'react'
// import husband from '../assets/breakdownImgA.jpg';
// import wife from '../assets/ashAshin.jpg';
// import mc from '../assets/derekG.jpg';
// import partyPlanner from '../assets/partyPlanner.jpg';
import bestMan from '../assets/bestMan.jpg';
import groomsMen from '../assets/groomsMen.jpg';
import groomsMan from '../assets/groomsMan.jpg';
import lauren from '../assets/lauren.jpg';
import nia from '../assets/Nia.jpg';
import marie from '../assets/Marie.jpg';
import alise from '../assets/Alise.jpg';
import Autumn from '../assets/Autumn.jpg';
                                                                                   
import Navlinks from './Navlinks/Navlinks.jsx'
import "./weddingParty/weddingPartyStyling.css";

const WeddingParty = () => {
  return (
<div>
  <Navlinks/>
  <div className="wedTeamContainer">
  <h3 id="wedTeamTitle">The Wedding Party</h3>
    <div className="wedTopSlider">
      {/* <img src={wife} alt="Ashley" className="sliderImg" /> */}
      <img src={Autumn} alt="Autumn" className="sliderImg" />
      <img src={bestMan} alt="Chris" className="sliderImg" />
      <img src={nia} alt="Nia" className="sliderImg" />
      <img src={lauren} alt="Lauren" className="sliderImg" />
      <img src={groomsMan} alt="MikeJ" className="sliderImg" />
      <img src={marie} alt="Marie" className="sliderImg" />
      <img src={groomsMen} alt="MikeW" className="sliderImg" />
      <img src={alise} alt="Alise" className="sliderImg" />
    </div>

    <div className="stylingBox">
      <p className="stylingBoxText">
        #BozierEverAfter
      </p>
    </div>
  </div>

</div>
  )
}

export default WeddingParty