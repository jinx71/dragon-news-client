import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>

                        <Nav.Link href="#pricing">Signup</Nav.Link>
                        {
                            false ? <Nav.Link href="#pricing">Signout</Nav.Link>
                                :
                                <Nav.Link href="#pricing">Signin</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Current User: {`Akash`}</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;