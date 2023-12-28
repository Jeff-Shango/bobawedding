import React from 'react';
import '../accomd/accomodations.css';

const Accomodations = () => {
  const bozierLink = process.env.REACT_APP_BozierLink || "";

  return (
    <div id='accomdPage'>
      <a href="https://www.hyatt.com/en-US/hotel/maryland/hyatt-place-baltimore-inner-harbor/bwizh?corp_id=G-BARN" className="accomdLink" target="_blank" rel="noopener noreferrer">
        BozierEverAfter
      </a>        
    </div>
  );
}

export default Accomodations;