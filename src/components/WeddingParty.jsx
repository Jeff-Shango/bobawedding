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


const WeddingParty = () => {
  return (
    <div>
              {/* Wedding Team */}

              <div className="wedTeamContainer">

{/* husband and Wife Section  */}
{/* Husband section */}
<div className="husContainer">
<label htmlFor="husSection" className="husSection mainComp">Husband<br/>Jeff Bozier, Jr</label>

<img className='husbandPic' src={husband} alt="husband" />
</div>
{/* end of husband section */}

{/* Wife Section */}
<div className="wifeContainer">
<label htmlFor="WifeSection" className="wifeSection mainComp">Wife<br/>Ashley Cherie Barney</label>

<img className='wifePic' src={wife} alt="wife" />
</div>
{/* end of wife section */}
{/* end of wife and husband section */}

{/* Bridesmaid section */}
<div className="bridemaidContainer">
<label htmlFor="bridesmaidSection" className="bridesmaidSection mainComp">Bridesmaid<br/>Nia Hockaday</label>

<img className='bridesmaidPic' src={bridesmaid} alt="bridesmaid" />
</div>
{/* end of bridesmaid section */}


{/* Bridesmaid section */}
<div className="bridemaidContainer">
<label htmlFor="brideMaidSection" className="brideMaidSection mainComp">Maid of Honor<br/>Autumn Bruton</label>

<img className='brideMaidPic' src={brideMaid} alt="brideMaid" />
</div>
{/* end of bridesmaid section */}



{/* bestMan section */}
<div className="bestManContainer">
<label htmlFor="bestManSection" className="bestManSection mainComp">Best Man<br/>Chris Kiah</label>

<img className='bestManPic' src={bestMan} alt="bestMan" />
</div>
{/* end of bestMan section */}

{/* groomsWoman section */}
<div className="groomsWomanContainer">
<label htmlFor="groomsWomanSection" className="groomsWomanSection mainComp">Grooms Women<br/>Erica Settles</label>

<img className='groomsWomanPic' src={groomsWoman} alt="groomsWoman" />
</div>
{/* end of groomsMen section */}

{/* groomsMen section */}
<div className="groomsMenContainer">
<label htmlFor="groomsMenSection" className="groomsMenSection mainComp">Grooms Men<br/>Michael Wright</label>

<img className='groomsMenPic' src={groomsMen} alt="groomsMen" />
</div>
{/* end of groomsMen section */}

{/* groomsMen section */}
<div className="groomsMenContainer">
<label htmlFor="groomsMenSection" className="groomsMenSection mainComp">Grooms Men<br/>Michael James</label>

<img className='groomsMenPic' src={groomsMan} alt="groomsMen" />
</div>
{/* end of groomsMen section */}



{/* Master of Ceremony section */}
<div className="mcContainer">
<label htmlFor="mcSection" className="mcSection mainComp">Master of Ceremonies<br/>Derek Gillaspie</label>

<img className='mcPic' src={mc} alt="mc" />
</div>
{/* end of MC section */}

{/* Party Planner section */}
<div className="partyPlannerContainer">
<label htmlFor="partyPlannerSection" className="partyPlannerSection mainComp">Party Planner<br/>Eevee</label>

<img className='partyPlannerPic' src={partyPlanner} alt="partyPlanner" />
</div>
{/* end of partyPlanner section */}
</div>
{/* End of Wedding Team Section */}

    </div>
  )
}

export default WeddingParty