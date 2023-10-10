import React from "react"
import './App.css';
import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery.jsx";
import Registry from "./components/Registry.jsx";
import RSVP from "./components/RSVP.jsx";
import Schedule from "./components/Schedule.jsx";
// import CartProvider from "./functions/CartContext.js";
import Success from "./functions/Success.jsx";
import Cancel from "./functions/Cancel.jsx";


function App() {
  
  return (
    // <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/"
              element={
                <div className='container'>
                  <Dashboard/>
                </div>
              }/>
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path="/registry" element={<Registry/>}/>
            <Route path="/rsvp" element={<RSVP/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/cancel" element={<Cancel/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
        </BrowserRouter>

      </div>
    // </CartProvider>
  );
}

export default App;
