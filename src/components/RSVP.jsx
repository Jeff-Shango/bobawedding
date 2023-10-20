import React, { useRef } from 'react'
import "./rsvp/rsvpStyling.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const RSVP = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98g590d', 'RSVP_Invite', form.current, 'mYD0XtrHqKMCCWhkE').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset()
  };

  return (
    <div id='rsvpPage'>
      <Link to="/">
        <button className='btn btn-primary'>Go Home</button>
      </Link>

      <h1 className="rsvpTitle">RSVP</h1>

      <h2 className="rsvpSubTitle">lOVE YOU SO MUCH, ASHLEY</h2>

      <p className="rsvpP">We warmly invite you to RSVP for The Bozier wedding! Please don't hesistate to contact either Ashley or Jeff if you have any questions or need assistance. We're looking forward to seeing all of you there and sharing this joyous occasion together!!</p>

      <form ref={form} className="rsvpForm" onSubmit={sendEmail} method="post">
        {/* enter name */}
        <h3 className="rsvpFormSTitle" >Name</h3>
        <input required type="text" name="name" id="formInput" placeholder='First'/>
        <input  required type="text" name="lastName" id="formInput" placeholder='Last'/>

        {/* enter email */}
        <h3 className="rsvpFormSTitle" >Email</h3>
        <input type="text" name="email" id="formInput" />

        {/* enter number */}
        <h3 className="rsvpFormSTitle">Phone</h3>
        <input required type="tel" name="phone" id="formInput"  />

        {/* rsvp */}
        <h3 className="rsvpFormSTitle">Are you Coming?</h3>
        <aside>
          Yes
            <input type="checkbox" name="checklistYes" id="formInput"/>
        </aside>

        <aside>
          No
            <input type="checkbox" name="checklistNo" id="formInput"/>
        </aside>

        {/* food restrictions */}
        <h3 className="rsvpFormsTitle">Food options</h3>
        <aside>
          Vegan
          <input type="checkbox" name="vegan" id="formInput" />
        </aside>

        <aside>
          Meat
          <input type="checkbox" name="meat" id="formInput" />
        </aside>

        <aside>
          Fish
          <input type="checkbox" name='fish' id='formInput' />
        </aside>

        {/* special details */}
        <h3>Is there anything we need to make special note of?</h3>
        <input type="text" name="specialNote" id="formInput" />

        {/* submit */}
        <br/>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default RSVP