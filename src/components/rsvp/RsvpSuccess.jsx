import React from 'react';
import Navlinks from '../Navlinks/Navlinks.jsx';
import './rsvpSuccessStyle.css';

const RsvpSuccess = () => {
  return (
    <div id="success-popup">
        <Navlinks/>
        <p id='successContent'>
            Hello ,
        </p>
        
        <p id='successContent'>
            We thank you for sending in your RSVP! This is a big moment for us, and we are truly excited to be able to share this moment with our friends and family.
        </p>

        <p id='successContent'>
            Please prepare to have fun with this moment in time to acknowledge our commitment to each other. We eagerly await to see YOU!!
        </p>

        <p id='successContent'>
            -Jeff & (future) Ashley Bozier
        </p>
  </div>
  )
}

export default RsvpSuccess 