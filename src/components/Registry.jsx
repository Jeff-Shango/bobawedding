import React, { useEffect } from 'react';
import "./registry/registryStyling.css";
import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../functions/stripeFunctions';
import cashApp from '../assets/theBoziersCashApp.jpg';
import { Link } from 'react-router-dom';


const Registry = () => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=hvFHaT5YimquHhrHtXG1yQ2&v=2';
    document.getElementById('scriptContainer').appendChild(script);

    return () => {
      document.getElementById('scriptContainer').removeChild(script);
    };
  }, []);


  return (
    <div id='registryPageContainer'>
              {/* Registry Link Container */}

              <div className="registryContainer">

<Link to="/registry">
  <button className="cashAppTitle btn btn-primary">Click Hashtag for Registry</button>
</Link>
  <div className="cashAppContainer">
    <button src="https://cash.app/$TheBoziers" className='cashAppButton' onClick={() => window.open('https://cash.app/$TheBoziers', '_blank')}>
    <img src={cashApp} alt="cashApp" />
    </button>
  </div>

  <div className="zelleContainer">
    <h2 align="center" className='p-3'>Quick Payments</h2>
    <Row xs={2} md={3} className="g-4">
      {productsArray.map((product, idx) => (
        <Col align="center" key={idx} >
          {/* <ProductCard product={product}/> */}
        </Col>
      ))}
      

    </Row>
  </div>
  
{/* navbar */}
{/* <NavbarComponent></NavbarComponent> */}
{/* end of navbar */}

</div>
{/* End of Registry Portion */}

<iframe
id='script_myregistry_giftlist_iframe'
title="MyRegistry Gift List"
></iframe>


    </div>
  )
}

export default Registry