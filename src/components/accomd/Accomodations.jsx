import React from 'react';
import '../accomd/accomodations.css';
import Navlinks from '../Navlinks/Navlinks';

const Accomodations = () => {
  const bozierLink = process.env.REACT_APP_BozierLink || "";

  return (
    <div id='accomdPage'>
      <Navlinks/>
      {/* <h1 className="accomdTopTitle">Venue</h1> */}

      <div className="accomdTopLayer">
        {/* <h2 className="accomdTopLayerContent">The ceremony and celebration will be held at <strong>Celebrations at the Bay: Tented Vista Ballroom.</strong> 2042 Knollview Ave. Pasadena, MD 21122
        </h2> */}

        <div className='topAccomdPic'/>
      </div>

      <div className="accomdBottomLayer">
        <h1 className="accomdBottomTitle">Accomodations</h1>

        {/* <h2 className="accomdBottomLayerContent">
          For your convenience, a block of rooms has been reserved at the Hyatt Place Baltimore Inner Harbor, about 30 minutes from the venue. Reservations will be made by individuals before April 30, 2024 by using our custom booking link: <u>BozierEverAfter</u>
          <br/>
          or
          <br/>
          Calling 1-888 HYATT HP (1-888-492-8847) and referencing the Group Code: <strong>G-BARN</strong>
          <br/>
          *Please note, all reservations must be made by the cutoff date April 30, 2024 to be guaranteed the negotiated group rate.
        </h2> */}

        <div className="bottomAccomdPic"></div>
        </div>


      
      <a href="https://www.hyatt.com/en-US/hotel/maryland/hyatt-place-baltimore-inner-harbor/bwizh?corp_id=G-BARN" className="accomdLink" target="_blank">
        BozierEverAfter
      </a>        
    </div>
  );
}

export default Accomodations;