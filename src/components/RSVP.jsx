import React, { useRef, useEffect } from 'react'
import "./rsvp/rsvpStyling.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import Navlinks from '../components/Navlinks/Navlinks.jsx'
// import { Link } from 'react-router-dom';

const RSVP = () => {
  const form = useRef();

  useEffect(() => {
    const rsvpPlusOneCheckbox = document.getElementById('rsvpPlusOne');
    const additionalGuestFields = document.querySelector('.additional-guest-fields');

    rsvpPlusOneCheckbox.addEventListener('change', () => {
      if (rsvpPlusOneCheckbox.checked) {
        additionalGuestFields.style.display = 'block';
        // additionalGuestFields.style.justifyContent = 'space-between';
      } else {
        additionalGuestFields.style.display = 'none';
      }
    });
  }, []);

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
      <Navlinks/>
      
    <h1 className="rsvpTitle">RSVP</h1>

    <h2 className="rsvpSubTitle">RSVP Due by:April 21, 2024</h2>

    <p className="rsvpP">We warmly invite you to RSVP for The Bozier wedding! Please don't hesistate to contact either Ashley or Jeff if you have any questions or need assistance. We're looking forward to seeing all of you there and sharing this joyous occasion together!!</p>

    <form method='post' className="rsvpForm" ref={form} onSubmit={sendEmail}>
    
      {/* rsvp */}
      <h3 className="rsvpFormsTitle">RSVP</h3>
      <div id='linkContainer'>
      <aside>
        <h3 id="rsvpText">
        Yes
        </h3>
          <input type="checkbox" name="checklistYes" id="formInput"/>
      </aside>

      <aside>
        <h3 id="rsvpText">
        No
        </h3>
          <input type="checkbox" name="checklistNo" id="formInput"/>
      </aside>
      </div>

      {/* rsvp for another person feature field */}
      <div className="plusOneContainer">
        <input type="checkbox" id='rsvpPlusOne' />
        <label htmlFor='rsvpPlusOne'>RSVP'ing for someone else?</label>
      </div>

      {/* form name container  */}
      <div className="formNameContainer">
        <div className="form">
          <input type="text" name="name" autoComplete='off' required className='inputFName'/>
            <label htmlFor="text" className="label-name labelFName">
              <span className="content-name spanFName">
                First Name
              </span>
            </label>

        </div>

        <div className="form">
          <input type="text" name="lastName" autoComplete='off' required className='inputLName' />
          <label htmlFor="text" className="label-name labelLName">
            <span className="content-name spanLName">
              Last Name
            </span>
          </label>

        </div>
        </div>

        
        <div className="contactInformationContainer">
          <div className="formEmailContainer">
            <div className="form">
              <input type="text" name="email" autoComplete='off' required className='inputEmail' />
              <label htmlFor="text" className="label-name labelEmail">
                <span className="content-name spanEmail">
                  Email
                </span>
              </label>

            </div>
          </div>
        
          <div className="formPhoneContainer ">
          <div className="form">
            <input type="tel" name="phone" autoComplete='off' required className='inputPhone' />
            <label htmlFor="text" className="label-name labelPhone">
              <span className="content-name spanPhone">
                Phone
              </span>
            </label>
            
          </div>
          </div>
        </div>


        {/* food restrictions */}
        <div className="foodRestricContainer">
        <h3 className="rsvpFormsTitle">Food options</h3>
        <div id='linkContainer'>
        <aside>
          <h3 id="rsvpText">
          Vegan
          </h3>
          <input type="checkbox" name="vegan" id="formInput" />
        </aside>

        <aside>
          <h3 id="rsvpText">
          Meat
          </h3>
          <input type="checkbox" name="meat" id="formInput" />
        </aside>

        <aside>
          <h3 id="rsvpText">
          Fish
          </h3>
          <input type="checkbox" name='fish' id='formInput' />
        </aside>
        </div>

        
        </div>

        {/* special details */}
        <h3 className="rsvpFormsTitle">Special Considerations</h3>
        <input type="text" name="specialNote" id="formInput" />

        {/* plus 1/additional guest entries */}
        <div className="extraPersonContainer">
        <div className=" additional-guest-fields">
          <div className="formNameContainer">
          <div className="form formAdd">
          <input type="text" name="nameAdd" autoComplete='off' required className='inputFName'/>
            <label htmlFor="text" className="label-name labelFName">
              <span className="content-name spanFName">
                First Name (optional)
              </span>
            </label>
          </div>

          <div className="form formAdd">
          <input type="text" name="lastNameAdd" autoComplete='off' required className='inputLName' />
          <label htmlFor="text" className="label-name labelLName">
            <span className="content-name spanLName">
              Last Name (optional)
            </span>
          </label>
          </div>
          </div>  

          <div className="contactInformationContainerAdd">
          <div className="formEmailContainer">
            <div className="form">
              <input type="text" name="emailAdd" autoComplete='off' required className='inputEmail' />
              <label htmlFor="text" className="label-name labelEmail">
                <span className="content-name spanEmail">
                  Email (Optional)
                </span>
              </label>

            </div>
          </div>
          </div>
        
          <div className="formPhoneContainerAdd">
          <div className="form">
            <input type="tel" name="phone" autoComplete='off' required className='inputPhone' />
            <label htmlFor="text" className="label-name labelPhone">
              <span className="content-name spanPhone">
                Phone
              </span>
            </label>
          </div>  
          </div>

        <div id="linkContainer">
        <aside>
          <h3 id="rsvpTextAdd">
          Vegan
          </h3>
          <input type="checkbox" name="veganAdd" id="formInputAdd" />
        </aside>

        <aside>
          <h3 id="rsvpTextAdd">
          Meat
          </h3>
          <input type="checkbox" name="meatAdd" id="formInputAdd" />
        </aside>

        <aside>
          <h3 id="rsvpTextAdd">
          Fish
          </h3>
          <input type="checkbox" name='fishAdd' id='formInputAdd' />
        </aside>
        </div>
        </div>

          {/* <div className="form">
              <div className=" additional-guest-fields">
                <input type="text" name="emailAdd" autoComplete='off' className='inputEmailAdd' />
                <label htmlFor="text" className="label-name labelEmail">
                  <span className="content-name spanEmail">
                    Email (optional)
                  </span>
                </label>
              </div>
          </div>

          <div className="form">
            <input type="tel" name="phoneAdd" autoComplete='off' className='inputPhoneAdd' />
            <label htmlFor="text" className="label-name labelPhoneAdd">
              <span className="content-name spanPhoneAdd">
                Phone (Optional)
              </span>
            </label>
          </div> */}
        {/* </div> */}
        </div>

  <div className="captcha-container">
            <ReCAPTCHA
            id='captchaBox'
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
  </div>
  <button type='submit' className='rsvpSubmit'>RSVP</button>
  </form>

  <div className="bottomContainer">
    <h3 className='bottomContent'>
      **We respectfully request that <u>only</u> the individuals mentioned on the invitation join us, as we have limited space and regretfully cannot accommodate addiional guests. While we adore children, we have chose to keep our wedding an adults-only affair**
    </h3>
  </div>
      </div> 
  )
}

export default RSVP