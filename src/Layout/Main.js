import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Component/Navigation/Navigation';
import { useLoaderData } from 'react-router-dom';
import SideNavigation from '../Component/SideNavigation/SideNavigation';
import RightSideNavigation from '../Component/RightSideNavigation/RightSideNavigation';
const Main = () => {
    const categories = useLoaderData();
    return (
        <Container>
            <Navigation></Navigation>
            <Row>
                <Col lg="2"><SideNavigation categories={categories}></SideNavigation></Col>
                <Col lg="7">This is main</Col>
                <Col lg="3"><RightSideNavigation></RightSideNavigation></Col>
            </Row>
        </Container>
    );
};

export default Main;