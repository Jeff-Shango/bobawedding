import React, { useEffect, useState } from 'react';
// import { ProductCard } from '../functions/ProductCard.js';
import './dashboard.css';
import './Navlinks/navlinks.css'
import 'react-slideshow-image/dist/styles.css';
// import { Fade } from 'react-slideshow-image';
// import img1 from '../assets/imgA.jpg';
// import img2 from '../assets/imgB.jpg';
// import img3 from '../assets/imgC.jpg';
// import { Link } from 'react-router-dom';
// import { Chrono } from 'react-chrono';
// import { NavbarComponent } from './NavbarComponent';


// const items = [
//   {
//   title: "April 20, 2020",
//   cardTitle: "Initial Contact",
//   cardSubtitle:"Jeff slid into Ashley's DMs on OK Cupid!",
//   cardDetailedText: "",
// },
// {
//   title: "May 31, 2020",
//   cardTitle: "Initial Sight",
//   cardSubtitle:"We first saw each other in person",
//   cardDetailedText: "Hung out around Parkville, MD ",
// },
// {
//   title: "November 4-6, 2020",
//   cardTitle: "First Bae-cation",
//   cardSubtitle:"Front Royal, VA",
//   cardDetailedText: "Both felt the need for a vacation from life, and both decided to go together!",
// },
// {
//   title: "November 13, 2020",
//   cardTitle: "Become an official couple",
//   cardSubtitle:"Decide to stop playing games and make it official as a couple.",
//   cardDetailedText: "Wanting to make a pact that we were going to be each other's boyfriend and girlfriend.",
// },
// {
//   title: "April 17-18, 2021",
//   cardTitle: "Myrtle Beach, South Carolina",
//   cardSubtitle:"Weekend trip to Myrtle Beach, South Carolina.",
//   cardDetailedText: "This trip was where Jeff and Ashley almost talked each other into eloping and marrying then and there.",
// },
// {
//   title: "August 9-15, 2021",
//   cardTitle: "Miami, Florida",
//   cardSubtitle:"Baecation to Florida.",
//   cardDetailedText: "Celebrating Ashley's birthday!",
// },
// {
//   title: "July 8-15, 2022",
//   cardTitle: "Montego Bay, Jamaica",
//   cardSubtitle:"Weekend trip to Myrtle Beach, South Carolina.",
//   cardDetailedText: "This trip was where Jeff and Ashley almost talked each other into eloping and marrying then and there.",
// },
// {
//   title: "April 21, 2023",
//   cardTitle: "Jeff proposes!",
//   cardSubtitle:"Jeff surprises Ashley by popping the question!",
//   cardDetailedText: "Having a student from Jeff's boxing classes, he had the person pose as a photographer at the community event they were going to at Carrol Park. As the photographer told us he wanted to give us a photoshoot, he prompted Ashley and Jeff to a spot where he proceeded to do a photoshoot. Instructing Ashley to step in front of Jeff, Jeff prepared himself by getting down on one knee and waiting for the photographer to tell Ashley to look at Jeff.",
// } ];

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

    <h1 id="dashboardTitle" className='mainComp text-pop-up-top calendarSlot'>Friday, May 31, 2024</h1>
    <div className='clock'>
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
  // const [activeItems, setActiveItems] = useState(Array(items.length).fill(false));

  // const handleItemClick = (index) => {
  //   const updatedActiveItems = [...activeItems];
  //   updatedActiveItems[index] = true;
  //   setActiveItems(updatedActiveItems);
  // };
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=hvFHaT5YimquHhrHtXG1yQ2&v=2';
    document.getElementById('scriptContainer').appendChild(script);

    return () => {
      document.getElementById('scriptContainer').removeChild(script);
    };
  }, []);
  

  const targetDate = new Date('May 31, 2024 18:30:00');

  // const fadeImages = [
  //   {
  //     img: img1,
  //     caption: 'love you',
  //   },
  //   {
  //     img: img2,
  //     caption: 'beautiful lady',
  //   },
  //   {
  //     img: img3,
  //     caption: 'My Boo',
  //   },
  // ];

  return (
    <div className='mainDashboard'>
      
      <div id="dashboardHeaderContainer">
        <h1 className='text-shadow-pop-top'>Bozier Ever After</h1>

        <div id="dashNavCon">
          <a href="/rsvp" id="dashLink"> RSVP</a>
          <a href="/schedule" id="dashLink"> SCHEDULE</a>
          <a href="/registry" id="dashLink">REGISTRY</a>
          <a href="/weddingParty" id="dashLink">WEDDING PARTY</a>
        </div>
      </div>

      {/* put below  */}
             {/* slideshow */}
       
             {/* <div id="galleryContainer"/> */}


<div id="dashboardSlideshow">
{/* <Link to="/gallery">
  <Fade>
    {fadeImages.map((fadeImage, index) => (
      <div id='photoBox' key={index}>
        <img
          // style={{ height: '20rem', width: '25rem' }}
          src={fadeImage.img}
          alt="slideshow"
        />
      </div>
    ))}
  </Fade>
</Link> */}
{/* <button className='btn btn-primary'>Go to Gallery</button> */}
<div className="timeDivContainer">
      <CountdownTimer className="countdown" targetDate={targetDate} />
      
      <div className="timeMainContainer">
        {/* <label htmlFor="date" className='calendarLabel mainComp'>When:</label> */}
        

        {/* <label htmlFor="time" className='calendarLabel mainComp'>Time:</label> */}
        {/* <h1 id="dashboardTitle" className='mainComp text-pop-up-top calendarSlot'>6:30pm - 11:30pm</h1> */}
      </div>
    </div>

</div>
    

      {/* put above */}
      {/* <Link to="/rsvp">
        <button className='btn btn-primary'>RSVP</button>
       </Link> */}

      {/* events coming up/highlighted */}
      {/* <div className="dashEventContainer">
        <h3 className="mainComp" id='dashboardTitle'>Events Coming Up</h3>
        
        <div className="dashEvents">
          
          <div className="timelineSection" >
            <Chrono
             scrollable={{ scrollbar: true }} 
             items={items}
             onItemClick={(item, index) => handleItemClick(index)}/>
          </div>
        </div>
        <Link to="/schedule">
          <button className="dashTimelineButton btn btn-primary">
            Expanded Timeline
          </button>
        </Link>

      </div> */}

      {/* end of events  */}

      
      {/* main dashboard */}
      <div className="dashboardContainer">
      </div>
        {/* end of slideshow */}


        

        {/* container for other features  */}

      {/* end of feature container */}
    </div>
  );
};

export default Dashboard;
