import React, { useEffect } from 'react';
import "./registry/registryStyling.css";
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
      <h1 className="registryTitle">Bozier Registry</h1>

      <iframe
        id='script_myregistry_giftlist_iframe'
        title="MyRegistry Gift List"
      ></iframe>


      <button className="homeButton btn btn-primary" src="/" onClick={() => window.open('/', '_self')} >Go Home</button>

    </div>
  )
}

export default Registry