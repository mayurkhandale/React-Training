import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container> 
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/about'>About</Link></Nav.Link>
                            <Nav.Link ><Link to='/contact'>Contact</Link></Nav.Link>
                           

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
            <Outlet />
        </div>
    )
}
