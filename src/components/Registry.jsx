import React, {useState} from 'react';
import "./registry/registryStyling.css";
// import {Row, Col} from 'react-bootstrap';
// import { productsArray } from '../functions/stripeFunctions';
// import cashApp from '../assets/theBoziersCashApp.png';
import bozierMoneyTag from '../assets/borderWOQR.png';
import Navlinks from './Navlinks/Navlinks.jsx'

const Registry = () => {
  const [buttons, setButtons] = useState([
    // { label: 'Cash App', link: 'https://cash.app/$TheBoziers' },
    { label: 'Future Fund', link: 'https://enroll.zellepay.com/qr-codes?data=eqwoglCJ0b' },
    { label: 'Official Registry', link: 'https://www.myregistry.com/wedding-registry/jeff-bozier-and-ashley-barney-baltimore-md/3857459' }
  ]);

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = '//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=hvFHaT5YimquHhrHtXG1yQ2&v=2';
  //   document.getElementById('scriptContainer').appendChild(script);

  //   return () => {
  //     document.getElementById('scriptContainer').removeChild(script);
  //   };
  // }, []);


  return (
    <>
    <Navlinks/>

    {/* <div id='registryPageContainer'> */}
    <div id='registryPageContainer' style={{ backgroundImage: `url(${bozierMoneyTag})` }}>
        {/* Description */}

              {/* Registry Link Container */}

              {/* <div className="registryContainer"> */}


  {/* <div className="cashAppContainer"> */}
    <h3 className="registryDescriptionTop">Your presence on our special day means the world to us, and we are truly grateful for your love and support. If you are considering a gift, a contribution to our future together would be greatly appreciated.</h3>

         {/* Button list */}
         <div className="cashAppContainer">
          {buttons.map((button, index) => (
            <button
              key={index}
              className='cashAppButton'
              onClick={() => window.open(button.link, '_blank')}
            >
              {button.label}
            </button>
          ))}
        </div>

    {/* <img id='moneyImg' src={bozierMoneyTag} alt="cashApp" /> */}
    <h3 className="registryDescriptionBottom">We understand that some of our guests may prefer to give traditional wedding gifts. In that case, please use the above link to access our registry.</h3>

    
    {/* <button src="https://cash.app/$TheBoziers" className='cashAppButton' id='cashAppButtonA' onClick={() => window.open('https://cash.app/$TheBoziers', '_blank')}>
      Cash App
    </button>
    <button src="https://enroll.zellepay.com/qr-codes?data=eqwoglCJ0b" className='cashAppButton' id='cashAppButtonB' onClick={() => window.open('https://enroll.zellepay.com/qr-codes?data=ewogICJ0b2tlbiIgOiAiNDEwNTcwODU3OCIsCiAgImFjdGlvbiIgOiAicGF5bWVudCIsCiAgIm5hbWUiIDogIkFTSExFWSIKfQ==', '_blank')}>
      Zelle
    </button>
    <button src="https://www.myregistry.com/wedding-registry/jeff-bozier-and-ashley-barney-baltimore-md/3857459" className='cashAppButton' id='cashAppButtonC' onClick={() => window.open('https://www.myregistry.com/wedding-registry/jeff-bozier-and-ashley-barney-baltimore-md/3857459', '_blank')}>
      Official Registry
    </button> */}
  </div>

  {/* <div className="zelleContainer">
    <h2 align="center" className='p-3'>Quick Payments</h2>
    <Row xs={2} md={3} className="g-4">
      {productsArray.map((product, idx) => (
        <Col align="center" key={idx} >
          <ProductCard product={product}/>
        </Col>
      ))}
      

    </Row>
  </div> */}
  
{/* navbar */}
{/* <NavbarComponent></NavbarComponent> */}
{/* end of navbar */}

{/* End of Registry Portion */}


    {/* </div> */}
    </>
  )
}

export default Registry