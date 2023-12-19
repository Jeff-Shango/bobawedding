import React from 'react';
import '../accomd/accomodations.css';

const Accomodations = () => {
  const bozierLink = process.env.REACT_APP_BozierLink || "";

  return (
    <div id='accomdPage'>
      <a href={bozierLink} className="accomdLink" target="_blank" rel="noopener noreferrer">
        BozierEverAfter
      </a>        
    </div>
  );
}

export default Accomodations;
