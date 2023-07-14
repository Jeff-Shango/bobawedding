import React, { useEffect, useState } from 'react';
import './dashboard.css';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import cashApp from '../assets/cashApp.jpg';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import { Link } from 'react-router-dom';
import husband from '../assets/breakdownImgA.jpg';
import wife from '../assets/ashAshin.jpg';
import mc from '../assets/derekG.jpg'
import bridesmaid from '../assets/bridesmaid.jpg';
import partyPlanner from '../assets/partyPlanner.jpg';
import bestMan from '../assets/bestMan.JPG';
import { Chrono } from 'react-chrono';

const items = [
  {
  title: "April 20, 2020",
  cardTitle: "Initial Contact",
  cardSubtitle:"Jeff slid into Ashley's DMs on OK Cupid!",
  cardDetailedText: "",
  media: {
    type: "IMAGE",
    source: {
      url: "../assets/breakdownImgA.jpg"
    }
  }
},
{
  title: "May 31, 2020",
  cardTitle: "Initial Sight",
  cardSubtitle:"We first saw each other in person",
  cardDetailedText: "Hung out around Parkville, MD ",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "November 4-6, 2020",
  cardTitle: "First Bae-cation",
  cardSubtitle:"Front Royal, VA",
  cardDetailedText: "Both felt the need for a vacation from life, and both decided to go together!",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "November 13, 2020",
  cardTitle: "Become an official couple",
  cardSubtitle:"Decide to stop playing games and make it official as a couple.",
  cardDetailedText: "Wanting to make a pact that we were going to be each other's boyfriend and girlfriend.",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "April 17-18, 2021",
  cardTitle: "Myrtle Beach, South Carolina",
  cardSubtitle:"Weekend trip to Myrtle Beach, South Carolina.",
  cardDetailedText: "This trip was where Jeff and Ashley almost talked each other into eloping and marrying then and there.",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "August 9-15, 2021",
  cardTitle: "Miami, Florida",
  cardSubtitle:"Baecation to Florida.",
  cardDetailedText: "Celebrating Ashley's birthday!",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "July 8-15, 2022",
  cardTitle: "Montego Bay, Jamaica",
  cardSubtitle:"Weekend trip to Myrtle Beach, South Carolina.",
  cardDetailedText: "This trip was where Jeff and Ashley almost talked each other into eloping and marrying then and there.",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
},
{
  title: "April 21, 2023",
  cardTitle: "Jeff proposes!",
  cardSubtitle:"Jeff surprises Ashley by popping the question!",
  cardDetailedText: "Having a student from Jeff's boxing classes, he had the person pose as a photographer at the community event they were going to at Carrol Park. As the photographer told us he wanted to give us a photoshoot, he prompted Ashley and Jeff to a spot where he proceeded to do a photoshoot. Instructing Ashley to step in front of Jeff, Jeff prepared himself by getting down on one knee and waiting for the photographer to tell Ashley to look at Jeff.",
  media: {
    type: "IMAGE",
    source: {
      url: "http://someurl/image.jpg"
    }
  }
} ];

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
    <div>

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
    </div>
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
    <div className='mainDashboard'>
      <h1 className='mainComp' id="dashboardTitle">SAVE THE DATE</h1>


      <label htmlFor="date" className='mainComp'>When:</label>
      <h1 id="dashboardTitle" className='mainComp'>May 31, 2024</h1>

      <label htmlFor="time" className='mainComp'>Time:</label>
      <h1 id="dashboardTitle" className='mainComp'>6:30pm - 11:30pm</h1>

      <CountdownTimer targetDate={targetDate} />

      <Link to="/rsvp">
        <button className='btn btn-primary'>RSVP</button>
       </Link>

      {/* events coming up/highlighted */}
      <div className="dashEventContainer">
        <h3 className="mainComp" id='dashboardTitle'>Events Coming Up</h3>
        
        <div className="dashEvents">
          
          <div className="timelineSection" >
            <Chrono scrollable={{ scrollbar: true }} items={items}/>
          </div>
        </div>
        <Link to="/schedule">
          <button className="dashTimelineButton btn btn-primary">
            Expanded Timeline
          </button>
        </Link>

      </div>

      {/* end of events  */}

      
      {/* main dashboard */}
      <div className="dashboardContainer">
       
       {/* slideshow */}
       
        <div id="galleryContainer"/>

        <div id="dashboardSlideshow">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index}>
                <img
                  style={{ height: '30rem', width: '30rem' }}
                  src={fadeImage.img}
                  alt="slideshow"
                />
                <h2 className='slideshowCaption'>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
          <Link to="/gallery">
        <button className='btn btn-primary'>Go to Gallery</button>
       </Link>
        </div>
      </div>
        {/* end of slideshow */}

        {/* Wedding Team */}

        <div className="wedTeamContainer">

              {/* husband and Wife Section  */}
              {/* Husband section */}
          <div className="husContainer">
            <label htmlFor="husSection" className="husSection mainComp">Husband<br/>Jeff Bozier, Jr</label>

            <img className='husbandPic' src={husband} alt="husband" />
          </div>
          {/* end of husband section */}
          
          {/* Wife Section */}
          <div className="wifeContainer">
            <label htmlFor="WifeSection" className="wifeSection mainComp">Wife<br/>Ashley Cherie Barney</label>

            <img className='wifePic' src={wife} alt="wife" />
          </div>
          {/* end of wife section */}
          {/* end of wife and husband section */}

          {/* Bridesmaid section */}
          <div className="bridemaidContainer">
          <label htmlFor="bridesmaidSection" className="bridesmaidSection mainComp">Bridesmaid<br/>Nia Hockaday</label>

          <img className='bridesmaidPic' src={bridesmaid} alt="bridesmaid" />
          </div>
          {/* end of bridesmaid section */}

          {/* bestMan section */}
          <div className="bestManContainer">
          <label htmlFor="bestManSection" className="bestManSection mainComp">Best Man<br/>Chris Kiah</label>

          <img className='bestManPic' src={bestMan} alt="bestMan" />
          </div>
          {/* end of bestMan section */}


          {/* Master of Ceremony section */}
          <div className="mcContainer">
            <label htmlFor="mcSection" className="mcSection mainComp">Master of Ceremonies<br/>Derek Gillaspie</label>

            <img className='mcPic' src={mc} alt="mc" />
          </div>
          {/* end of MC section */}

          {/* Party Planner section */}
          <div className="partyPlannerContainer">
            <label htmlFor="partyPlannerSection" className="partyPlannerSection mainComp">Party Planner<br/>Eevee</label>

            <img className='partyPlannerPic' src={partyPlanner} alt="partyPlanner" />
          </div>
          {/* end of partyPlanner section */}
        </div>
        {/* End of Wedding Team Section */}

        {/* Registry Link Container */}

        <div className="registryContainer">

        <Link to="/Registry">
          <button className="cashAppTitle btn btn-primary">Click Hashtag for Registry</button>
        </Link>
          <div className="cashAppContainer">
            <img src={cashApp} alt="cashApp" />
          </div>

        </div>
        {/* End of Registry Portion */}
        {/* container for other features  */}
      <div className="buttonContainer">
      </div>
      {/* end of feature container */}
    </div>
  );
};

export default Dashboard;
