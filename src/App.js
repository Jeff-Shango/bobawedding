import React from "react"
import './App.css';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery.jsx";
import Registry from "./components/Registry.jsx";
import RSVP from "./components/RSVP.jsx";
import Schedule from "./components/Schedule.jsx";
import footerImg from "./assets/logoSolo.png";
// import CartProvider from "./functions/CartContext.js";
import Success from "./functions/Success.jsx";
import Cancel from "./functions/Cancel.jsx";
// import Navlinks from "./components/Navlinks/Navlinks";
import WeddingParty from "./components/WeddingParty.jsx";
import Login from "./login/Login.jsx";
import Hotel from "./components/Hotel.jsx"
import Accomodations from "./components/accomd/Accomodations.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  
  
  return (
    // <CartProvider>
        <BrowserRouter>
      <div className="App">
          {/* <Navlinks/> */}
        {/* <Route 
          element={<Navlinks isDashboard={isDashboard}/>}/> */}
          <Routes>
            <Route 
              path="/"
              element={
                <div className='container'>
                  <Dashboard/>
                </div>
              }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/registry" element={<Registry/>}/>
            <Route path="/rsvp" element={<RSVP/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/cancel" element={<Cancel/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/weddingParty" element={<WeddingParty/>}/>
            <Route path="/accomodations" element={<Accomodations/>}/>
          </Routes>
          <div className="footer">
            © 2023 Jeff Bozier, Jr
          </div>
      </div>
        </BrowserRouter>
    // </CartProvider>
  );
}

export default App;
