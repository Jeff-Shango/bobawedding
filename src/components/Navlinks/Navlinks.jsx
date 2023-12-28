import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './navlinks.css';
import '../../App.css'

const Navlinks = () => {
  return (
    <Navbar expand="lg" variant="dark" id="mainNavContainer">
      <Navbar.Brand to="/" id="logoLink" as={Link}>
        {/* Your logo or brand */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav navContainer">
        <Nav className="mr-auto navContainer">
          <Link id="dashLink" to="https://bozierwedding.netlify.app/">
            HOME
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/rsvp">
            RSVP
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/gallery">
            GALLERY
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/schedule">
            OUR LOVE STORY
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/weddingParty">
            WEDDING TEAM
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/registry">
            REGISTRY
          </Link>
          <Link id="dashLink" to="https://bozierwedding.netlify.app/accomodations">
            ACCOMODATIONS
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navlinks;
