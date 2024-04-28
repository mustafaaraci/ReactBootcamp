import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBook } from 'react-icons/fa';





function NavbarHead() {
  return (
    <>
      <Navbar expand="lg" className="navbarhead fixed-top">
      <Container>
        <Navbar.Brand href="/anasayfa" className='headname'><FaBook className='icon'/>Kurslarım</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link href="/anasayfa">Anasayfa</Nav.Link>
              <Nav.Link href="/egitim">Eğitimlerim</Nav.Link>
            <NavDropdown title="Kurslar" id="basic-nav-dropdown">
              <NavDropdown.Item href="kurslar/csharp">Csharp(C#) Eğitimi</NavDropdown.Item>
              <NavDropdown.Item href="kurslar/javascript"> JavaScript Eğitimi</NavDropdown.Item>
              <NavDropdown.Item href="kurslar/react">React Eğitimi</NavDropdown.Item>
              <NavDropdown.Item href="kurslar/sql">SQL Eğitimi</NavDropdown.Item>
              <NavDropdown.Item href="kurslar/asp">ASP.NET CORE MVC Eğitimi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="kurslar/indirimli">
                İndirimli Kurslar
              </NavDropdown.Item>
            </NavDropdown>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarHead