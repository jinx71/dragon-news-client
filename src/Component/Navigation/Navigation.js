import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLoaderData } from 'react-router-dom';
import SideNavigation from '../SideNavigation/SideNavigation';

const Navigation = () => {
    const categories = useLoaderData();
    return (

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to='/home'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/news'>All News</Link></Nav.Link>

                        <Nav.Link><Link to="/signup">Signup</Link></Nav.Link>
                        {
                            false ? <Nav.Link><Link to="/home">Signout</Link></Nav.Link>
                                :
                                <Nav.Link><Link to="/login">Signin</Link></Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Current User: {`Akash`}</Nav.Link>

                    </Nav>
                    <Nav className='d-block d-lg-none'>
                        <SideNavigation categories={categories}></SideNavigation>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;