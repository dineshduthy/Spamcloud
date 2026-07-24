import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

export default function Header() {
  return (
    <div>

        {/* desktop header starts */}
        <div className="pc-header">
    <Navbar expand="lg" className="background-header navbar-expand">
      <Container >
        <Link  href="/"><img className='header-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1729667110/SPAM_CLOUD_tuomse.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" className='home' >Home</Nav.Link>
          <Nav.Link href="/about" className='about' >About</Nav.Link>
            <NavDropdown className='menus' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services/incoming-filter">Incoming Spam Filter
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/outgoing-filter">
              Outgoing Spam Filter
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/email-archiving">Email Archiving </NavDropdown.Item>
              <NavDropdown.Item href="/services/carbonio-mail-service">
             Carbonio Mail
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/high-availability">
              High Availability
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/client" className='about' >Clients</Nav.Link>
            <Nav.Link  href="/contact" className='con'>Contact us</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    {/* desktop header ends */}


    {/* mobile header starts */}

    <div className="mobile-header">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Link  href="/"><img className='header-img' src="https://res.cloudinary.com/daggx9p24/image/upload/v1729667110/SPAM_CLOUD_tuomse.png" alt="" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/" className='home' >Home</Nav.Link>
          <Nav.Link href="/about" className='about' >About</Nav.Link>
            <NavDropdown className='menus' title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services/incoming-filter">Incoming Spam Filter
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/outgoing-filter">
              Outgoing Spam Filter
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/email-archiving">Email Archiving </NavDropdown.Item>
              <NavDropdown.Item href="/services/carbonio-mail-service">
             Carbonio Mail
              </NavDropdown.Item>
              <NavDropdown.Item href="/services/high-availability">
              High Availability
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/client" className='about' >Clients</Nav.Link>
            <Nav.Link  href="/contact" className='con'>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


    {/* mobile header ends */}



    </div>
  )
}
