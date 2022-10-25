import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RightSideNav from '../RightSideNav/RightSideNav';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { name, course_instructor, total_download, rating, image_url, overview } = courseDetails;
    console.log(courseDetails);
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="9">
                        <div className='me-lg-5'>
                            <h2 className='fw-bold'>{name}</h2>
                            <div className='d-lg-flex align-items-center mt-4'>
                                <div className='d-flex align-items-center '>
                                    <div >
                                        <Image className='img-fluid shadow-md border border-2 '
                                            style={{ height: '40px' }}
                                            roundedCircle src={course_instructor?.img}></Image>
                                    </div>
                                    <div className='ms-2'>
                                        <h6 className='mb-0'>{course_instructor?.name}</h6>
                                        <small>{course_instructor?.title}</small>
                                    </div>
                                </div>
                                <div className='ms-lg-5 ps-lg-5 mt-3 mt-lg-0'>
                                    <h6 className='mb-0'>Total Download:</h6>
                                    <small>{total_download}</small>
                                </div>
                                <div className='ms-lg-5 ps-lg-5 mt-3 mt-lg-0'>
                                    <h6 className='mb-0'>Review:</h6>
                                    <div>
                                        <FaStar className='text-warning'></FaStar>
                                        <small className='ms-1'>({rating.number})</small>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <img className='img-fluid' src={image_url} alt="" />
                            </div>
                            <div className='mt-3'>
                                <h3 className='fw-bold'>Course Overview</h3>
                                <p>{overview}</p>
                            </div>
                        </div>

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