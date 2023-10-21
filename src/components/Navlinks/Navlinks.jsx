import {AiOutlineHome} from 'react-icons/ai';
import {FaFileMedical} from 'react-icons/fa'
// import {RiBoxingFill} from 'react-icons/ri'
import {BsPersonFillAdd} from 'react-icons/bs'
import {GiPapers} from 'react-icons/gi'
// import { AiOutlineHome, FaFileMedical } from 'react-icons/ai';
// import { BsPersonFillAdd } from 'react-icons/bs';
// import { GiPapers } from 'react-icons/gi';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navlinks.css';

const Navlinks = () => {
  return (
    <Navbar expand="lg" variant="dark" id="mainNavContainer">
      <Navbar.Brand to="/" id="logoLink" as={Link}>
        {/* Your logo or brand */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navContainer">
          <Link id="dashLink" to="https://bozierwedding.netlify.app/">
            <AiOutlineHome /> Home
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/schedule">
            <BsPersonFillAdd /> Schedule
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/weddingParty">
            <GiPapers /> Wedding Team
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/registry">
            <FaFileMedical /> Registry
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navlinks;
