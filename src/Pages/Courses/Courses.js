import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='mb-4'>
            <Container>
                <Row>
                    <Col lg="8">
                        <h2 className='fw-bold'>Explore Our <span className='text-danger'>Popular Courses</span></h2>
                        <Row className='gap-5 mt-4' xs={1} md={2} lg={3}>
                        {
                            allCourses.map(course => <Course 
                            key={course.id} course={course}
                            ></Course>)
                        }
                        </Row>
                    </Col>
                    <Col lg="4">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;