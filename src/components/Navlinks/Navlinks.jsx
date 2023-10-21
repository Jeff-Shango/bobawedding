import {AiOutlineHome} from 'react-icons/ai';
import {FaFileMedical} from 'react-icons/fa'
import {RiBoxingFill} from 'react-icons/ri'
import {BsPersonFillAdd} from 'react-icons/bs'
import {GiPapers} from 'react-icons/gi'
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { AiOutlineHome, RiBoxingFill, BsPersonFillAdd, GiPapers, FaFileMedical } from 'react-icons/all';
import "./navlinks.css";

const Navlinks = () => {
  return (
    <Navbar expand="lg" variant="dark" id="mainNavContainer">
      <Navbar.Brand href="/" id="logoLink">
        {/* Your logo or brand */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navContainer">
          <Nav.Link id="dashLink" href="https://bozierwedding.netlify.app/">
            <AiOutlineHome /> Home
          </Nav.Link>
          <Nav.Link id="dashLink" href="https://bozierwedding.netlify.app/schedule">
            <BsPersonFillAdd /> Schedule
          </Nav.Link>
          <Nav.Link id="dashLink" href="https://bozierwedding.netlify.app/weddingParty">
            <GiPapers /> Wedding Team
          </Nav.Link>
          <Nav.Link id="dashLink" href="https://bozierwedding.netlify.app/registry">
            <FaFileMedical /> Registry
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navlinks;
