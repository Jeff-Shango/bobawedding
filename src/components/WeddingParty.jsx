import React from 'react'
import husband from '../assets/breakdownImgA.jpg';
import wife from '../assets/ashAshin.jpg';
import mc from '../assets/derekG.jpg'
import bridesmaid from '../assets/bridesmaid.jpg';
import brideMaid from '../assets/brideMaid.jpg';
import partyPlanner from '../assets/partyPlanner.jpg';
import bestMan from '../assets/bestMan.jpg';
import groomsMen from '../assets/groomsMen.jpg'
import groomsMan from '../assets/groomsMan.jpg'
import groomsWoman from '../assets/groomsWoman.jpg'
import Navlinks from './Navlinks/Navlinks.jsx'
import "./weddingParty/weddingPartyStyling.css";

const WeddingParty = () => {
  return (
    <div>
      <Navlinks/>
              {/* Wedding Team */}

                <h3 id="wedTeamTitle">Wedding Party</h3>
              <div className="wedTeamContainer">

{/* husband and Wife Section  */}
{/* Husband section */}
<div className="husContainer">
<label 
  htmlFor="husSection" 
  className="husSection mainComp">
    <span className="before-br">
    Husband
    </span>
    <br/>
    <span className="after-br">Jeff Bozier, Jr
    </span>
</label>

<img className='husbandPic' src={husband} alt="husband" />
</div>
{/* end of husband section */}

{/* Wife Section */}
<div className="wifeContainer">
<label 
  htmlFor="WifeSection" 
  className="wifeSection mainComp">
    <span className="before-br">
    Wife
    </span>
    <br/>
    <span className="after-br">Ashley Cherie Barney
    </span>
</label>

<img className='wifePic' src={wife} alt="wife" />
</div>
{/* end of wife section */}
{/* end of wife and husband section */}

{/* Bridesmaid section */}
<div className="bridemaidContainer">
<label 
  htmlFor="bridesmaidSection" 
  className="bridesmaidSection mainComp">
    <span className="before-br">
    Bridesmaid
    </span>
    <br/>
    <span className="after-br">Nia Hockaday
    </span>
</label>

<img className='bridesmaidPic' src={bridesmaid} alt="bridesmaid" />
</div>
{/* end of bridesmaid section */}


{/* Bridesmaid section */}
<div className="bridemaidContainer">
<label 
  htmlFor="brideMaidSection" 
  className="brideMaidSection mainComp">
    <span className="before-br">
    Maid of Honor
    </span>
    <br/>
    <span className="after-br">Autumn Bruton
    </span>
</label>

<img className='brideMaidPic' src={brideMaid} alt="brideMaid" />
</div>
{/* end of bridesmaid section */}



{/* bestMan section */}
<div className="bestManContainer">
<label 
  htmlFor="bestManSection" 
  className="bestManSection mainComp">
    <span className="before-br">
    Best Man
    </span>
    <br/>
    <span className="after-br">Chris Kiah
    </span>
</label>

<img className='bestManPic' src={bestMan} alt="bestMan" />
</div>
{/* end of bestMan section */}

{/* groomsWoman section */}
<div className="groomsWomanContainer">
<label 
  htmlFor="groomsWomanSection" 
  className="groomsWomanSection mainComp">
    <span className="before-br">
    Grooms Women
    </span>
    <br/>
    <span className="after-br">Erica Settles
    </span>
</label>

<img className='groomsWomanPic' src={groomsWoman} alt="groomsWoman" />
</div>
{/* end of groomsMen section */}

{/* groomsMen section */}
<div className="groomsMenContainer">
<label 
  htmlFor="groomsMenSection" 
  className="groomsMenSection mainComp">
    <span className="before-br">
    Grooms Men
    </span>
    <br/>
    <span className="after-br">Michael Wright
    </span>
</label>

<img className='groomsMenPic' src={groomsMen} alt="groomsMen" />
</div>
{/* end of groomsMen section */}

{/* groomsMen section */}
<div className="groomsMenContainer">
<label 
  htmlFor="groomsMenSection" 
  className="groomsMenSection mainComp">
    <span className="before-br">
    Grooms Men
    </span>
    <br/>
    <span className="after-br">Michael James
    </span>
</label>

<img className='groomsMenPic' src={groomsMan} alt="groomsMen" />
</div>
{/* end of groomsMen section */}



{/* Master of Ceremony section */}
<div className="mcContainer">
<label 
  htmlFor="mcSection" 
  className="mcSection mainComp">
    <span className="before-br">
    Master of Ceremonies
    </span>
    <br/>
    <span className="after-br">Derek Gillaspie
    </span>
</label>

<img className='mcPic' src={mc} alt="mc" />
</div>
{/* end of MC section */}

{/* Party Planner section */}
<div className="partyPlannerContainer">
<label 
  htmlFor="partyPlannerSection" 
  className="partyPlannerSection mainComp">
    <span className="before-br">
    Party Planner
    </span>
    <br/>
    <span className="after-br">Eevee
    </span>
</label>

<img className='partyPlannerPic' src={partyPlanner} alt="partyPlanner" />
</div>
{/* end of partyPlanner section */}
</div>
{/* End of Wedding Team Section */}

    </div>
  )
}

export default WeddingParty