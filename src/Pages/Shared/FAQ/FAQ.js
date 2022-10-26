import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../../RightSideNav/RightSideNav';

const FAQ = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="8">
                        <h2>Let's check out Latest <span className='text-danger'>Blogs.</span></h2>
                        
                    </Col>
                    <Col lg="4">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FAQ;