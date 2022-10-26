import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { FaDownload, FaLanguage, FaRegClock, FaRegUser, FaStar, FaUsers } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { name, course_instructor, total_download, rating, image_url, overview, course_details, id } = courseDetails;
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
                                    <div className=''>
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
                                <div className='ms-lg-5 ps-lg-5 mt-3 mt-lg-0'>
                                    <div className='d-lg-flex flex-column align-items-center'>
                                        <h6 className='mb-0'>Download File</h6>
                                        <Link to="/files/myfile.pdf" target="_blank" download>
                                            <FaDownload className='text-danger fs-5 mt-1'></FaDownload></Link>

                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 shadow-sm border-start border-5'>
                                <img className='img-fluid' src={image_url} alt="" />
                            </div>
                            <div className='mt-3'>
                                <h3 className='fw-bold'>Course Overview</h3>
                                <p>{overview}</p>
                            </div>
                            <hr />
                        </div>

                    </Col>
                    <Col lg="3">
                        <div className='shadow-sm mt-2 mt-lg-5 mb-5 sticky-top'>
                            <div className='p-4'>
                                <h4 className='fw-semibold text-center'>{name} Course.</h4>
                                {/* <h5 className='fw-bold ms-2 mt-3'>Price:<span className='text-danger'> {course_details.price}</span><span className='fw-semibold text-danger'>.00</span> </h5> */}
                                <div className='d-flex align-items-center ps-2 mt-4'>
                                    <span><FaRegUser className='text-secondary me-2 text-danger'></FaRegUser> Instructor:</span>
                                    <h6 className='ms-2 mb-0'>{course_instructor?.name}</h6>
                                </div>
                                <hr className='mx-auto text-danger' />
                                <div className='d-flex align-items-center ps-2'>
                                    <span><FaRegClock className='text-secondary me-2 text-danger'></FaRegClock> Duration:</span>
                                    <h6 className='ms-2 mb-0'>{course_details?.duration}</h6>
                                </div>
                                <hr className=' mx-auto text-danger' />
                                <div className='d-flex align-items-center ps-2'>
                                    <span><FaUsers className='text-secondary me-2 text-danger'></FaUsers> Enrolled:</span>
                                    <h6 className='ms-2 mb-0'>{course_details?.enrolled}</h6>
                                </div>
                                <hr className=' mx-auto text-danger' />
                                <div className='d-flex align-items-center ps-2 '>
                                    <span><FaLanguage className='text-secondary me-2 text-danger'></FaLanguage> Language:</span>
                                    <h6 className='ms-2 mb-0'>{course_details?.language}</h6>
                                </div>
                            </div>
                            <div class="row justify-content-center mx-3 mb-3 pb-3">

                                <Link to={`/courses/premium/${id}`}><Button className='mx-auto block text-center' variant="danger">Premium Version</Button></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;