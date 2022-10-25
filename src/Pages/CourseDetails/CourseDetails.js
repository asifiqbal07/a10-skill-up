import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../RightSideNav/RightSideNav';

const CourseDetails = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                    <h2>Nav</h2>
                    </Col>
                    <Col lg="3">
                    <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;