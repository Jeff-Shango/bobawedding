import React from 'react'
import "./dashboard.css"
const Dashboard = () => {
  return (
    <>
    <h1 id='dashboardTitle'>SAVE THE DATE</h1>

    <label htmlFor="date">When:</label>
    <h1 id='dashboardTitle'>May 31, 2024</h1>

    <label htmlFor="time">Time:</label>
    <h1 id='dashboardTitle'>6:30pm - 11:30pm</h1>

    <div className="dashboardContainer">
        <div id="dashboardSlideshow">
            {/* slideshow of pictures cycling through  */}
            {/* ability to look at the pictures and to download them */}
        </div>

        <div id="linkContainer">
            {/* links to different pages */}
        </div>
    </div>
    </>
  )
}

export default Dashboard