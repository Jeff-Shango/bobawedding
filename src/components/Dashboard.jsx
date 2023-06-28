import React from 'react'
import "./dashboard.css"
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import img1 from '../assets/imgA.jpg'
import img2 from '../assets/imgB.jpg'
import img3 from '../assets/imgC.jpg'

const fadeImages = [
  {
    img: img1,
    caption: "love you"
  },
  {
    img: img2,
    caption: "beautiful lady"
  },
  {
    img: img3,
    caption: "My Boo"
  }
]
const Dashboard = () => {
  return (
    <>
    <h1 id='dashboardTitle'>SAVE THE DATE</h1>

    <label htmlFor="date">When:</label>
    <h1 id='dashboardTitle'>May 31, 2024</h1>

    <label htmlFor="time">Time:</label>
    <h1 id='dashboardTitle'>6:30pm - 11:30pm</h1>

    <div className="dashboardContainer">

      <div id="galleryContainer">
        {/* import a feature to have a gallery for all of the photos */}
      </div>
        <div id="dashboardSlideshow">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}  style={{ border: "2px solid blue"}}>
                <img style={{ height: "30rem",width: '30rem' }} src={fadeImage.img} alt='images'/>
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>

        <div id="linkContainer">
            {/* links to different pages */}
        </div>
    </div>
    </>
  )
}

export default Dashboard