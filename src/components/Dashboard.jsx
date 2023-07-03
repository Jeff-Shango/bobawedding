import React, { useEffect, useState } from 'react';
import './dashboard.css';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import cashApp from '../assets/cashApp.jpg';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import { Link } from 'react-router-dom';

const CountdownTimer = ({ targetDate }) => {
  const [timer, setTimer] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });


  useEffect(() => {
    const interval = setInterval(() => {
      const total = Date.parse(targetDate) - Date.parse(new Date());
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((total / (1000 * 60)) % 60);
      const secs = Math.floor((total / 1000) % 60);

      setTimer({ days, hours, mins, secs });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  return (
    <>
    <div className="cashAppContainer">
      <img src={cashApp} alt="cashApp" />
    </div>

    <div className="clock">
      <div className="timeContainer">
      <label htmlFor="days">Days</label>
      <div data-value="days">{formatNumber(timer.days)}</div>
      </div>

    <div className="timeContainer">
      
      <label htmlFor="hours">Hours</label>
      <div data-value="hours">{formatNumber(timer.hours)}</div>
      </div>

      <div className="timeContainer">
      
      <label htmlFor="minutes">Minutes</label>
      <div data-value="minutes">{formatNumber(timer.mins)}</div>
      </div>

      <div className="timeContainer">
      
      <label htmlFor="seconds">Seconds</label>
      <div data-value="seconds">{formatNumber(timer.secs)}</div>
    </div>
    </div>
    </>
  );
};

const Dashboard = () => {
  const targetDate = new Date('May 31, 2024 18:30:00');

  const fadeImages = [
    {
      img: img1,
      caption: 'love you',
    },
    {
      img: img2,
      caption: 'beautiful lady',
    },
    {
      img: img3,
      caption: 'My Boo',
    },
  ];

  return (
    <>
      <h1 id="dashboardTitle">SAVE THE DATE</h1>

      <label htmlFor="date">When:</label>
      <h1 id="dashboardTitle">May 31, 2024</h1>

      <label htmlFor="time">Time:</label>
      <h1 id="dashboardTitle">6:30pm - 11:30pm</h1>

      <CountdownTimer targetDate={targetDate} />

      <div className="dashboardContainer">
        <div id="galleryContainer">
          {/* import a feature to have a gallery for all of the photos */}
        </div>
        <div id="dashboardSlideshow">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index} style={{ border: '2px solid blue' }}>
                <img
                  style={{ height: '30rem', width: '30rem' }}
                  src={fadeImage.img}
                  alt="images"
                />
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>
      </div>

      <div className="buttonContainer">
       <Link to="/gallery">
        <button>Go to Gallery</button>
       </Link>

       <Link to="/rsvp">
        <button>RSVP</button>
       </Link>

       <Link to="/schedule">
        <button>Go to Schedule</button>
       </Link>
      </div>
    </>
  );
};

export default Dashboard;
