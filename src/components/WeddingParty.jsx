import React, { useState } from 'react';
// import husband from '../assets/breakdownImgA.jpg';
// import wife from '../assets/ashAshin.jpg';
// import mc from '../assets/derekG.jpg';
// import partyPlanner from '../assets/partyPlanner.jpg';
import chris from '../assets/bestMan.jpg';
// import chrisBreak from '../assets/chrisBreak.png';
import chrisBreak from '../assets/Chris.png';
import mikeW from '../assets/groomsMen.jpg';
// import mikeWBreak from '../assets/mikeWBreak.png';
import mikeWBreak from '../assets/Mike.png';
import mikeJ from '../assets/groomsMan.jpg';
// import mikeJBreak from '../assets/mikeJBreak.png';
import mikeJBreak from '../assets/MikeJ.png'
import lauren from '../assets/lauren.jpg';
// import laurenBreak from '../assets/laurenBreak.png';
import laurenBreak from '../assets/Lauren.png';
import nia from '../assets/Nia.jpg';
// import niaBreak from '../assets/niaBreak.png';
import niaBreak from '../assets/Nia.png';
import marie from '../assets/Marie.jpg';
// import marieBreak from '../assets/marieBreak.png';
import marieBreak from '../assets/Maria.png';
import alise from '../assets/Alise.jpg';
// import aliseBreak from '../assets/aliseBreak.png';
import aliseBreak from '../assets/Alise.png';
import Autumn from '../assets/Autumn.jpg';
// import autumnBreak from '../assets/autumnBreak.png';
import autumnBreak from '../assets/Autumn.png';
import evie from '../assets/Evie.jpg';
// import evieDescript from '../assets/EvieDescript.png'
import evieDescript from '../assets/Evie.png'; 

import Navlinks from './Navlinks/Navlinks.jsx'
import "./weddingParty/weddingPartyStyling.css";

const WeddingParty = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  // const [showScrollMessage, setShowScrollMessage] = useState(true);
  
  const images = [
    {
      src: evie,
      alt: "Evie",
      bio: evieDescript,
      bioBreak:"Evangela, known as 'Evie' to friends and family, was considered family far before her nuptials to the bride's maternal cousin in 2021. The bride and groom were ecstatic when Evie (pretty much) volunteered to act as the wedding coordinator. Evie informed the couple that she'd primarily planned and coordinated her own wedding after her initial coordinator left much to be desired. The bride and groom are eternally grateful for Evie's support with this process.",
    },
    {
      src: nia,
      alt: "Nia",
      bio: niaBreak,
      bioBreak:"Nia is the bride's younger cousin, whom the bride happily refers to as the 'sister her parents refused to give her.' As such, Nia had absolutely no choice in her role at the wedding, which she graciously accepted.",
    },
    {
      src: mikeJ,
      alt: "MikeJ",
      bio: mikeJBreak,
      bioBreak:"The groom has also known Mike since their college years at MSU. The groom was very popular at Morgan.",
    },
    {
      src: Autumn,
      alt: "Autumn",
      bio: autumnBreak,
      bioBreak:"Autumn is one of the Bride's (many-says the groom) best friends. Autumn and the bride met at NYU and their bond was solidifed during a dorm party their sophomore year.",
    }, 
    {
      src: mikeW,
      alt: "MikeW",
      bio: mikeWBreak,
      bioBreak:"The groom first met Mike in 2017 at a boxing event. The groom and Mike stood across the ring facing one another as opponents during the groom's first amateur boxing match. They've been friends ever since.",
    },
    {
      src: lauren,
      alt: "Lauren",
      bio: laurenBreak,
      bioBreak:"Lauren is the bride's cousin, birth mate (inside joke), and spirit sister (Yes. it's corny, you'll live). She and the bride grew up (mostly) together and are bonded beyond blood.",
    },
    {
      src: chris,
      alt: "Chris Kiah",
      bio: chrisBreak,
      bioBreak:"Chris is the groom's Best Man and best friend of 12+ years. Chris and the groom met at Morgan State University (MSU).",
    },
    {
      src: marie,
      alt: "Marie",
      bio: marieBreak,
      bioBreak:"Marie has been one of the bride's best friends (another one) since they were 14-years-old. They've maintained their friendship across schools, states, and continents.",
    },
    {
      src: alise,
      alt: "Alise",
      bio: aliseBreak,
      bioBreak:"The bride and Alise have been friends sicne their freshman year of high school. After 20 years of friendship, and a few international trips, it was only right that they moved into houses less than a half mile away from each other.",
    },
  ];

  const handleImageClick = (index) => {
    setSelectedImage(images[index])
    
    if (enlargedImage === images[index]) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(images[index])
    }
  };
  
  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };

  // const handleTouch = () => {
  //   const $scrollMessage = $('.scrollMessage');
  
    // Add the CSS animation class
    // $scrollMessage.addClass('rotate-scale-up-diag-1');
    // $scrollMessage.removeClass('.scrollMessage')
  
    // Use setTimeout to remove the class and hide the element after 5 seconds
  //   setTimeout(() => {
  //     setShowScrollMessage(true);
  //   }, 5000);
  // };
  

  // const handleTouch = () => {
  //   setShowScrollMessage(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('touchstart', handleTouch);

  //   return () => {
  //     window.removeEventListener('touchstart', handleTouch);
  //   };
  // }, []);
  
  return (
<div id='weddingPartyPage'>
  <Navlinks/>
  {/* {showScrollMessage && ( */}
    {/* <div className="scrollMessage">
      <p>Scroll to see the wedding party!<br/>Click on the image for bio!</p>
    </div> */}
  {/* )} */}
  <div className="wedTeamContainer">
  <h3 id="wedTeamTitle">The Wedding Party</h3>
  <div className="wedTopSlider">
      {images.map((image, index) => (
        <img
          key={index} 
          src={image.src} 
          alt={image.alt}
          className='sliderImg'
          onClick={() => handleImageClick(index)} 
        />
      ))}
      </div>
      {enlargedImage && (
        <div className="overlay" onClick={handleEnlargedImageClick}>
        <div className='largeImageContainer'>
          <img
            src={selectedImage.bio}
            alt={selectedImage.alt}
            className='largeImage'
            onClick={handleEnlargedImageClick}
          />
          <h3 
            className="photoBreakdown"
            src={selectedImage.bioBreak}
            alt={selectedImage.alt}
            onClick={handleEnlargedImageClick}
          >{selectedImage.bioBreak}</h3>
          </div>
          </div>
          
      )}
      
      {/* <img src={wife} alt="Ashley" className="sliderImg" /> */}
      {/* <img src={Autumn} alt="Autumn" className="sliderImg" />
      <img src={bestMan} alt="Chris" className="sliderImg" />
      <img src={nia} alt="Nia" className="sliderImg" />
      <img src={lauren} alt="Lauren" className="sliderImg" />
      <img src={groomsMan} alt="MikeJ" className="sliderImg" />
      <img src={marie} alt="Marie" className="sliderImg" />
      <img src={groomsMen} alt="MikeW" className="sliderImg" />
      <img src={alise} alt="Alise" className="sliderImg" /> */}
    <div className="stylingBox">
    <p className='scrollMessage'>
      Scroll to see the wedding party!<br/>
      Click on the image for bio!
    </p>
      <p className="stylingBoxText">
        #BozierEverAfter
      </p>
    </div>
  </div>

</div>
  )
}

export default WeddingParty