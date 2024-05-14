import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/NavbarHead.css";
function NavbarHead() {
  return (
    <>
      <Navbar expand="lg" className="navbarhead fixed-top">
        <Container className="container">
          <Navbar.Brand className="headname">
            <Link to="/">
              <FaBook className="icon" />
              Kurslarım
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/anasayfa">Anasayfa</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/egitim">Eğitimlerim</Link>
              </Nav.Link>
              <NavDropdown title="Kurslar" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/kurslar/csharp">Csharp(C#) Eğitimi</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="kurslar/javascript">JavaScript Eğitimi</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="kurslar/react">React Eğitimi</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="kurslar/sql">SQL Eğitimi</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="kurslar/asp">ASP.NET CORE MVC Eğitimi</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="kurslar/indirimli">İndirimli Kurslar</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHead;
