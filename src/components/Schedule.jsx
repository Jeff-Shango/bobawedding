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
      type: "VIDEO",
      source: {
        url: require("../assets/BOBAOfficial.mp4")
      }
    }
  },
  {
    title: "April 17-18, 2021",
    cardTitle: "Myrtle Beach, South Carolina",
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
    cardDetailedText: "For the groom's 30th birthday, the bride organized a special trip to Jamaica, the birthday place of his favorite musician, Bob Marley. It was their third birthday celebration as a couple and their first international trip together.",
    media: {
      type: "VIDEO",
      source: {
        url: require("../assets/MontegoBayTrip.mp4")
      }
    }
  },
  {
    title: "April 21, 2023",
    cardTitle: "Jeff proposes!",
    cardDetailedText: "The bride and groom planned to attend a local community event at Carroll Park. Unbeknownst to the bride, the groom had arranged for one of his friend's from his boxing class to pose as one of the event's photographers. The photographer then offered the couple a photoshoot and directed the bride and groom to a specific location. After instructing the bride to stand in front of the groom, the groom positioned himself on one knee, awaited the photographer's cue and when she turned around, there he was. The bride said she blacked out after that but recalls being incredibly happy. The groom said that the first words the bride uttered were, 'What the f**k dude,' which sounds on brand for the bride.",
    media: {
      type: "IMAGE",
      source: {
        url: require("../assets/proposalPic.png")     
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
        slideShow
        slideShowType="reveal"
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