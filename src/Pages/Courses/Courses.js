import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                        <h1>Explore Our Popular Courses: {allCourses.length}</h1>
                        <Row className='gap-4 mt-4 ' xs={1} md={2} lg={3}>
                        {
                            allCourses.map(course => <Course 
                            key={course.id} course={course}
                            ></Course>)
                        }
                        </Row>
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