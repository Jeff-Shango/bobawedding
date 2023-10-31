import React from 'react';
import "./registry/registryStyling.css";
// import {Row, Col} from 'react-bootstrap';
// import { productsArray } from '../functions/stripeFunctions';
import cashApp from '../assets/theBoziersCashApp.png';
import Navlinks from './Navlinks/Navlinks.jsx'

const Registry = () => {
  
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
    <div id='registryPageContainer'>
              {/* Registry Link Container */}

              {/* <div className="registryContainer"> */}


  <div className="cashAppContainer">
    <img src={cashApp} alt="cashApp" />
    <aside id='registryAside'>Scan or click on the links to donate or see registry</aside>
    <button src="https://cash.app/$TheBoziers" className='cashAppButton' onClick={() => window.open('https://cash.app/$TheBoziers', '_blank')}>
      Cash App
    </button>
    <button src="https://enroll.zellepay.com/qr-codes?data=eqwoglCJ0b" className='cashAppButton' onClick={() => window.open('https://enroll.zellepay.com/qr-codes?data=ewogICJ0b2tlbiIgOiAiNDEwNTcwODU3OCIsCiAgImFjdGlvbiIgOiAicGF5bWVudCIsCiAgIm5hbWUiIDogIkFTSExFWSIKfQ==', '_blank')}>
      Zelle
    </button>
    <button src="https://www.myregistry.com/wedding-registry/jeff-bozier-and-ashley-barney-baltimore-md/3857459" className='cashAppButton' onClick={() => window.open('https://www.myregistry.com/wedding-registry/jeff-bozier-and-ashley-barney-baltimore-md/3857459', '_blank')}>
      Official Registry
    </button>
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


    </div>
    </>
  )
}

export default Registry