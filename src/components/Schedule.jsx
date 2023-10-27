import React from 'react'
import { Chrono } from 'react-chrono'
import "./schedule/scheduleStyling.css";
import Navlinks from './Navlinks/Navlinks';

const Schedule = () => {
  const items = [
    {
    title: "April 20, 2020",
    cardTitle: "First Contact",
    cardSubtitle:"After both swiping right on OkCupid! The groom slid into the bride's DMs and they've been talking every day since.",
    cardDetailedText: "",
      media: {
    source: {
      url: require("../assets/okCupid.mp4"),
      type: "mp4"
    },
    type: "VIDEO",
    name: "First Sight",
    muted: true
  },
  autoPlay: false,
  controls: false
  },
  {
    title: "May 31, 2020",
    cardTitle: "First Meeting",
    cardSubtitle:"After several texts, phone calls and FaceTimes, the bride and groom decided to meet in person. Pandemic dating encouraged the pair to have intimate dates where they got to know each other better.",
    cardDetailedText: "",
    media: {
    source: {
      url: require("../assets/lakeMont.JPG"),
      type: "mp4"
    },
    type: "IMAGE",
    name: "First Meeting",
    muted: true
  },
  autoPlay: false,
  controls: false
  },
  {
    title: "November 4-6, 2020",
    cardTitle: "First Baecation",
    cardSubtitle:"The bride and groom traveled to a cabin in Front Royal, VA for their first couple getaway. They spent the long weekend relaxing, laughing and dancing around the idea of commitment.",
    cardDetailedText: "",
    media: {
      source: {
        url: require("../assets/baecation.mp4"),
        type: "mp4"
      },
      type: "VIDEO",
      name: "First Encouter",
      muted: true
    },
    autoPlay: true,
    controls: false
  },
  {
    title: "November 13, 2020",
    cardTitle: "Made it Official",
    cardSubtitle:"The groom asked the bride if she wanted to be his \"woman,\" she giddily accepted. They immediately moved in together, and well...we're here, aren't we.",
    cardDetailedText: "",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/officialCouple.jpg")
      }
    }
  },
  {
    title: "April 17-18, 2021",
    cardTitle: "Myrtle Beach, South Carolina",
    cardSubtitle:"Weekend trip to Myrtle Beach, South Carolina.",
    cardDetailedText: "On the day the bride and groom were leaving the beach to drive back to Baltimore, they dared each other to elope. But alas, it was a Sunday and Google wasn't willing to indulge the couple's impulsivity that day.",
    media: {
      type: "VIDEO",
      source: {
        url: require("../assets/myrtleBeach.mp4")
      }
    }
  },
  {
    title: "August 9-15, 2021",
    cardTitle: "Miami, Florida",
    cardSubtitle:"The COuple Decided to Make a Habit of Traveling Together",
    cardDetailedText:"For the Bride's Birthday, the couple decided to spend a week in Miami, FL. They declared that they would travel annually during one of the weeks between their July and August birthdays.",
    media: {
      type: "VIDEO",
      source: {
        url: require("../assets/florida.mp4")
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
        url: require("../assets/jamaica.jpg")
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
        url: require("../assets/proposal.jpg")
      }
    }
  } ];
  
  return (
    <>
    <Navlinks/>
    <div id='scheduleContainer'>
        {/* <Link to="/">
          <button id='scheduleHmeBtn' className="galleryHomeBtn btn btn-primary">Go To Home</button>
        </Link> */}
      <Chrono
        className="my-timeline"
        items={items}        
        enableBreakPoint
        verticalBreakPoint={450}
        mode="VERTICAL_ALTERNATING"
        // slideShow
        // slideShowType="reveal"
        slideShowDuration={200}
        classNames={{
          card: 'my-card',
          cardMedia: 'my-card-media',
          cardSubTitle: 'my-card-subtitle',
          cardText: 'my-card-text',
          cardTitle: 'my-card-title',
          controls: 'my-controls',
          title: 'my-title',
        }}
        />
      </div>
        </>
  )
}

export default Schedule