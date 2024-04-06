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
          Thank you for your RSVP! We're thrilled you'll be joining us on our special day. Just a heads-up, this is a formal affair, so come dressed to impress. Feel free to embrace the Spring vibes and add a splash of color to your attire. Can't wait to celebrate with you!
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