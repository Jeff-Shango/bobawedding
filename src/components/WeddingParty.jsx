import React, { useState, useEffect } from 'react';
import $ from 'jquery';
// import husband from '../assets/breakdownImgA.jpg';
// import wife from '../assets/ashAshin.jpg';
// import mc from '../assets/derekG.jpg';
// import partyPlanner from '../assets/partyPlanner.jpg';
import chris from '../assets/bestMan.jpg';
import chrisBreak from '../assets/chrisBreak.png';
import mikeW from '../assets/groomsMen.jpg';
import mikeWBreak from '../assets/mikeWBreak.png';
import mikeJ from '../assets/groomsMan.jpg';
import mikeJBreak from '../assets/mikeJBreak.png';
import lauren from '../assets/lauren.jpg';
import laurenBreak from '../assets/laurenBreak.png';
import nia from '../assets/Nia.jpg';
import niaBreak from '../assets/niaBreak.png';
import marie from '../assets/Marie.jpg';
import marieBreak from '../assets/marieBreak.png';
import alise from '../assets/Alise.jpg';
import aliseBreak from '../assets/aliseBreak.png';
import Autumn from '../assets/Autumn.jpg';
import autumnBreak from '../assets/autumnBreak.png';
                                                                                   
import Navlinks from './Navlinks/Navlinks.jsx'
import "./weddingParty/weddingPartyStyling.css";

const WeddingParty = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollMessage, setShowScrollMessage] = useState(true);

  const images = [
    {
      src: chris,
      alt: "Chris Kiah",
      bio: chrisBreak,
    },
    {
      src: mikeJ,
      alt: "MikeJ",
      bio: mikeJBreak,
    },
    {
      src: mikeW,
      alt: "MikeW",
      bio: mikeWBreak,
    },
    {
      src: lauren,
      alt: "Lauren",
      bio: laurenBreak,
    },
    {
      src: nia,
      alt: "Nia",
      bio: niaBreak
    },
    {
      src: marie,
      alt: "Marie",
      bio: marieBreak,
    },
    {
      src: alise,
      alt: "Alise",
      bio: aliseBreak,
    },
    {
      src: Autumn,
      alt: "Autumn",
      bio: autumnBreak,
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
  

  const handleTouch = () => {
    setShowScrollMessage(false);
    $('.scrollMessage').addClass('rotate-scale-up-diag-1');

    setTimeout(() => {
        $('.scrollMessage').addClass('rotate-scale-up-diag-1');
        setShowScrollMessage(false);
    }, 5000);
  };

  useEffect(() => {
    window.addEventListener('touchstart', handleTouch);

    return () => {
      window.removeEventListener('touchstart', handleTouch);
    };
  }, []);
  
  return (
<div id='weddingPartyPage'>
  <Navlinks/>
  <div className="wedTeamContainer">
  <h3 id="wedTeamTitle">The Wedding Party</h3>
  {showScrollMessage && (
    <div className="scrollMessage">
      <p>Scroll to see the wedding party!<br/>Click on the image for bio!</p>
    </div>
  )}
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
      <p className="stylingBoxText">
        #BozierEverAfter
      </p>
    </div>
  </div>

</div>
  )
}

export default WeddingParty