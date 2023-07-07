import React from 'react'
import { Chrono } from 'react-chrono'

const Schedule = () => {
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
  
  return (
    <div>
      <Chrono items={items} mode="VERTICAL"/>
      </div>
  )
}

export default Schedule