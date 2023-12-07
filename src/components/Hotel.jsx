import React from 'react'
import Navlinks from './Navlinks/Navlinks';

// Janay Harris - Event Planning Manager 
// Hotel - Hyatt Place Baltimore 
// May 30, 2024
// reservations will be made by individuals before April 30, 2024 to receive the guaranteed negotiated group rate
// link custom booking link: BozierEverAfter
// reference the Group Code: G-BARN
const Hotel = () => {
  return (
    <div>
{/* hotel title w/ navlinks */}
        <h1 id="Title">HYATT PLACE</h1>
        <Navlinks/>

{/* reservation description */}
        <div className="reserveDescriptLinkCont">
            <h3 className="resDescript">
                Reservations will be made by individuals before April 30, 2024 to receive the guaranteed negotiated group rate! Click on the provided link to reserve!
            </h3>

            <h4 className="resLink">
                <a href="https://www.hyatt.com/brands/hyatt-place" className="resALink">Hyatt Place Website</a>
            </h4>

        </div>

{/* reservation link */}

    </div>
  )
}

export default Hotel