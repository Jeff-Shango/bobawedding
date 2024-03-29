import React, { useRef, useEffect, useState } from 'react'
import "./rsvp/rsvpStyling.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import Navlinks from '../components/Navlinks/Navlinks.jsx';
import { useNavigate } from 'react-router-dom';

const RSVP = () => {
  const navigate = useNavigate();
  const form = useRef();
    const [firstName, setFirstName] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  // const history = useHistory();

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

  // useEffect(() => {
  //   const rsvpNotification = document.getElementById('success-popup');
  //   rsvpNotification = useState(false);

  //   if (rsvpNotification == true) {
  //     rsvpNotification.style.display = 'block';
  //   } else {
  //     rsvpNotification.style.display = 'none';
  //   }
  // })

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98g590d', 'RSVP_Invite', form.current, 'mYD0XtrHqKMCCWhkE').then((result) => {
      console.log(result.text);
      setFirstName(e.target.elements.name.value);
      })
      .catch((error) => {
      console.log(error.text);
    });

    navigate('/ThankYou');
    // e.target.reset()
  };

  return (
    <div id='rsvpPage'>
      <Navlinks/>
      
    <h1 className="rsvpTitle">RSVP</h1>

    <h2 className="rsvpSubTitle">
      BY:
    </h2>

      <h2 className='rsvpDueDate'>
        April 21, 2024
      </h2>

    {/* <p className="rsvpP">We warmly invite you to RSVP for The Bozier wedding! Please don't hesistate to contact either Ashley or Jeff if you have any questions or need assistance. We're looking forward to seeing all of you there and sharing this joyous occasion together!!</p> */}

    <form method='post' className="rsvpForm" ref={form} onSubmit={sendEmail}>
    
      {/* rsvp */}
      {/* <h3 className="rsvpFormsTitle">RSVP</h3> */}
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
        <label htmlFor='rsvpPlusOne' className='xtraChecklistTitle'>RSVP'ing for someone else?</label>
        <input type="checkbox" id='rsvpPlusOne' name='checkboxExtra'/>
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
        <h3 className="rsvpFormsTitle specialFormSection">Special Considerations</h3>
        <input type="text" name="specialNote" id="formInputSpecial" />

        {/* plus 1/additional guest entries */}
        <div className="extraPersonContainer">
        <div className=" additional-guest-fields">
          <div className="formNameContainer">
          <div className="form formAdd">
          <input type="text" name="nameAdd" autoComplete='off'  className='inputFName'/>
            <label htmlFor="text" className="label-name labelFName">
              <span className="content-name spanFName">
                First Name
              </span>
            </label>
          </div>

          <div className="form formAdd">
          <input type="text" name="lastNameAdd" autoComplete='off'  className='inputLName' />
          <label htmlFor="text" className="label-name labelLName">
            <span className="content-name spanLName">
              Last Name
            </span>
          </label>
          </div>
          </div>  

          <div className="contactInformationContainerAdd">
          <div className="formEmailContainer">
            <div className="form">
              <input type="text" name="emailAdd" autoComplete='off'  className='inputEmail' />
              <label htmlFor="text" className="label-name labelEmail">
                <span className="content-name spanEmail">
                  Email
                </span>
              </label>

            </div>
          </div>
          </div>
        
          <div className="formPhoneContainer">
          <div className="form">
            <input type="tel" name="phoneAdd" autoComplete='off'  className='inputPhone' />
            <label htmlFor="text" className="label-name labelPhone">
              <span className="content-name spanPhoneAdd">
                Phone
              </span>
            </label>
          </div>  
          </div>

        <div id="linkContainerAdd">
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

        {/* special details */}
        <h3 className="rsvpFormsTitle">Special Considerations</h3>
        <input type="text" name="specialNoteAdd" id="formInputSpecial" />

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

  {/* <div className="captcha-container">
            <ReCAPTCHA
            id='captchaBox'
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"/>
  </div> */}
  <button type='submit' className='rsvpSubmit'>RSVP</button>
  </form>
{/* Show success popup if showSuccessPopup state is true */}
        {/* <div id="success-popup">
          <p>Hello {firstName},</p>
          <p>We thank you for sending in your RSVP! This is a big moment for us, and we are truly excited to be able to share this moment with our friends and family.</p>
          <p>Please prepare to have fun with this moment in time to acknowledge our commitment to each other. We eagerly await to see YOU!!</p>
          <p>-Jeff & (future) Ashley Bozier</p>
        </div> */}


  {/* Success popup */}
  {/* {showSuccessPopup && (
        <div id="success-popup">
          <button onClick={handleCloseSuccessPopup}>Close</button>
          <p>Hello {firstName},</p>
          <p>We thank you for sending in your RSVP! This is a big moment for us, and we are truly excited to be able to share this moment with our friends and family.</p>
          <p>Please prepare to have fun with this moment in time to acknowledge our commitment to each other. We eagerly await to see YOU!!</p>
          <p>-Jeff & (future) Ashley Bozier</p>
        </div>
      )} */}

  <div className="bottomContainer">
    <h3 className='bottomContent'>
      **We respectfully request that <u>only</u> the individuals mentioned on the invitation join us, as we have limited space and regretfully cannot accommodate addiional guests. While we adore children, we have chose to keep our wedding an adults-only affair**
    </h3>
  </div>
      </div> 
  )
}

export default RSVP