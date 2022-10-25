import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                    <h1>Courses here</h1>
                    </Col>
                    <Col lg="3">
                    <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;