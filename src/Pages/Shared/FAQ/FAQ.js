import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Col, Container, Row } from 'react-bootstrap';
import RightSideNav from '../../RightSideNav/RightSideNav';

const FAQ = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="8">
                        <h2>FAQS.
                        </h2>
                        <Accordion className='mt-3'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='fw-semibold'>#1 How to pay?</span></Accordion.Header>
                                <Accordion.Body>
                                     We received all kinds of digital Payment system.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span className='fw-semibold'>#2 Can I access my courses for lifetime?</span> </Accordion.Header>
                                <Accordion.Body>
                                    Yes, of Course.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span className='fw-semibold'>#3 Can I get VIP support? </span></Accordion.Header>
                                <Accordion.Body>
                                    VIP support is only for Premium Users.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><span className='fw-semibold'>#4 Can I get certificate?</span> </Accordion.Header>
                                <Accordion.Body>
                                    Yes, you will get certificate according to your quiz results.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
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