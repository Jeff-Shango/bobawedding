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
    <>

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

      <CountdownTimer targetDate={targetDate} className="countdownTime" />

      {/* events coming up/highlighted */}
      <div className="dashEventContainer">
        <h3 className="dashEventTitle">Events Coming Up</h3>
        
        <div className="dashEvents">
          
          <div className="timelineSection" >
            <Chrono scrollable={{ scrollbar: true }} items={items}/>
          </div>
        </div>
      </div>

      {/* end of events  */}

      
      {/* main dashboard */}
      <div className="dashboardContainer">
       
       {/* slideshow */}
       
        <div id="galleryContainer"/>

        <div id="dashboardSlideshow">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index} style={{ border: '2px solid blue' }}>
                <img
                  style={{ height: '30rem', width: '30rem' }}
                  src={fadeImage.img}
                  alt="slideshow"
                />
                <h2>{fadeImage.caption}</h2>
              </div>
            ))}
          </Fade>
        </div>
      </div>
        {/* end of slideshow */}

        {/* Wedding Team */}

        <div className="wedTeamContainer">

              {/* husband and Wife Section  */}
              {/* Husband section */}
          <div className="husWifContainer">
            <label htmlFor="husSection" className="husSection">Husband<br/>Jeff Bozier, Jr</label>

            <img className='husbandPic' src={husband} alt="husband" />

            <article className='husArticle'>
              <p className="husDescrpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod assumenda libero itaque facilis recusandae magnam, at voluptate ab ex, ipsam odio. Quo est architecto porro cupiditate quia harum repellendus distinctio et inventore placeat necessitatibus, ab doloribus sunt id sint.</p>
            </article>
          {/* end of husband section */}
          
          {/* Wife Section */}
            <label htmlFor="WifeSection" className="wifeSection">Wife<br/>Ashley Cherie Barney</label>

            <img className='wifePic' src={wife} alt="wife" />

            <article className='wifeArticle'>
              <p className="wifeDescrpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod assumenda libero itaque facilis recusandae magnam, at voluptate ab ex, ipsam odio. Quo est architecto porro cupiditate quia harum repellendus distinctio et inventore placeat necessitatibus, ab doloribus sunt id sint.</p>
            </article>
          </div>
          {/* end of wife section */}
          {/* end of wife and husband section */}

          {/* Master of Ceremony section */}
          <label htmlFor="mcSection" className="mcSection">Master of Ceremonies<br/>Derek Gillaspie</label>

          <img className='mcPic' src={mc} alt="mc" />
                      
          <article className='mcArticle'>
            <p className="mcDescrpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod assumenda libero itaque facilis recusandae magnam, at voluptate ab ex, ipsam odio. Quo est architecto porro cupiditate quia harum repellendus distinctio et inventore placeat necessitatibus, ab doloribus sunt id sint.</p>
          </article>
          {/* end of MC section */}

          {/* Bridesmaid section */}
          <label htmlFor="bridesmaidSection" className="bridesmaidSection">Bridesmaid<br/>Nia Hockaday</label>

          <img className='bridesmaidPic' src={bridesmaid} alt="bridesmaid" />
                      
          <article className='bridesmaidArticle'>
            <p className="bridesmaidDescrpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod assumenda libero itaque facilis recusandae magnam, at voluptate ab ex, ipsam odio. Quo est architecto porro cupiditate quia harum repellendus distinctio et inventore placeat necessitatibus, ab doloribus sunt id sint.</p>
          </article>
          {/* end of bridesmaid section */}

          {/* Party Planner section */}
          <label htmlFor="partyPlannerSection" className="partyPlannerSection">Party Planner<br/>Eevee</label>

          <img className='partyPlannerPic' src={partyPlanner} alt="partyPlanner" />
                      
          <article className='partyPlannerArticle'>
            <p className="partyPlannerDescrpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod assumenda libero itaque facilis recusandae magnam, at voluptate ab ex, ipsam odio. Quo est architecto porro cupiditate quia harum repellendus distinctio et inventore placeat necessitatibus, ab doloribus sunt id sint.</p>
          </article>
          {/* end of partyPlanner section */}
        </div>
        {/* End of Wedding Team Section */}

        {/* Registry Link Container */}

        <div className="registryContainer">

          <div className="cashAppContainer">
            <img src={cashApp} alt="cashApp" />
          </div>

        </div>
        {/* End of Registry Portion */}
        {/* container for other features  */}
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
      {/* end of feature container */}
    </>
  );
};

export default Dashboard;
