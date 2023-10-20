import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
// import navBrand from "../assets/logoSolo.png";
import "./navlinks.css";
import {AiOutlineHome} from 'react-icons/ai';
import {FaFileMedical} from 'react-icons/fa'
import {RiBoxingFill} from 'react-icons/ri'
import {BsPersonFillAdd} from 'react-icons/bs'
import {GiPapers} from 'react-icons/gi'

const Navlinks = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [activeNav, setActiveNav] = useState('#')

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    }, []);

  return (
    // <Navbar 
    //     collapseOnSelect  
    //     variant='dark' 
    //     className="navbarContainer"
    //     >
    <div>
        {currentPath === '/' ? null : (
     <Navbar collapseOnSelect expand="lg" variant='dark' className='navbarContainer'>
    <Container>
        <Navbar.Brand>
            <a href="/" id="logoLink">
             {/* <Image src={navBrand} fluid/> */}
            </a>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
             <Navbar.Collapse id='responsive-navbar-nav'>
    <nav >
        <a id='navLink' href="https://bozierwedding.netlify.app/"onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
            <AiOutlineHome/>
            <p id='linkItem'>Home</p>
        </a>

        {/* <a id='navLink' href="/sessions" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>
            <BsFillCalendarRangeFill/>
            <p id='linkItem'>sessions</p>
        </a> */}

        <a id='navLink' href="https://bozierwedding.netlify.app/rsvp" onClick={() => setActiveNav('https://bozierwedding.netlify.app/rsvp')} className={activeNav === 'https://bozierwedding.netlify.app/rsvp' ? 'active' : ''}>
            <RiBoxingFill/>
            <p id='linkItem'>RSVP</p>
        </a>

        <a id='navLink' href="https://bozierwedding.netlify.app/schedule"  onClick={() => setActiveNav('https://bozierwedding.netlify.app/schedule')} className={activeNav === 'https://bozierwedding.netlify.app/schedule' ? 'active' : ''}>
            <BsPersonFillAdd/>
            <p id='linkItem'>Schedule</p>
        </a>

        <a id='navLink' href="https://bozierwedding.netlify.app/weddingParty"  onClick={() => setActiveNav('https://bozierwedding.netlify.app/weddingParty')} className={activeNav === 'https://bozierwedding.netlify.app/weddingParty' ? 'active' : ''}>
            <GiPapers/>
            <p id='linkItem'>Wedding Team</p>
        </a>

        <a id='navLink' href="https://bozierwedding.netlify.app/registry"  onClick={() => setActiveNav('https://bozierwedding.netlify.app/registry')} className={activeNav === 'https://bozierwedding.netlify.app/registry' ? 'active' : ''}>
            <FaFileMedical/>
            <p id='linkItem'>Registry</p>
        </a>
  </nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
  )}
  </div>
      )
    }
    
    export default Navlinks;
    // <Navbar fixed='top' collapseOnSelect expand="lg" bg='dark' variant='dark' className='navbarContainer'>
    //     <Container>
    //     <Navbar.Brand>
    //         <Image src={navBrand} fluid/>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    //         <Navbar.Collapse id='responsive-navbar-nav'>
    //             <Nav className='mr-auto navItems'>
    //                 <Nav.Link className='navItem' href='#'>Home</Nav.Link>
    //                 <Nav.Link className='navItem' href='#'>Sessions</Nav.Link>
    //                 <Nav.Link className='navItem' href='#'>Plans</Nav.Link>
    //                 <Nav.Link className='navItem' href='#'>Schedule</Nav.Link>
    //             </Nav>
    //             <Nav className='outerContainer align-items-center'>
    //                 <BsFillBellFill className='bellIcon'/>
    //                 <Button className='joinButton' variant='outline-light'>Join Now</Button>
    //             </Nav>
    //         </Navbar.Collapse>
    //         </Container>
    // </Navbar>