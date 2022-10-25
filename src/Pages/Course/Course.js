import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaArrowRight, FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { image_url, name, course_instructor, rating, total_download, course_details, id } = course;
    console.log(course);
    return (
        <div>
            <Col className='p-2'>
                <Card className='shadow-sm'>
                    <Card.Img className='p-2 rounded-4' variant="top" src={image_url} />
                    <Card.Body className='py-2'>

                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex align-items-center text-secondary'>
                                <FaDownload></FaDownload>
                                <small className='ms-2'>{total_download} Total Download</small>
                            </div>
                            <div className='d-flex align-items-center text-secondary'>
                                <FaStar className='text-warning'></FaStar>
                                <small className='ms-1'>({rating.number})</small>
                            </div>
                        </div>
                        <Card.Title className='my-4 fw-bolder'>{name}.</Card.Title>

                        <div className='d-flex align-items-center mt-4'>
                            <div >
                                <Image className='img-fluid shadow-md border border-2 '
                                    style={{ height: '40px' }}
                                    roundedCircle src={course_instructor?.img}></Image>
                            </div>
                            <div className='ms-2'>
                                <h6 className='mb-0'>{course_instructor?.name}</h6>
                            </div>
                        </div>

                    </Card.Body>
                    <Card.Footer className="bg-white d-flex align-items-center justify-content-between">
                        <h5 className='text-danger mb-0'>{course_details.price}</h5>

                        <Button variant="danger" className='border-0 fw-semibold'>
                            <Link className='text-decoration-none text-white' to={`/courses/${id}`}>Know Details <FaArrowRight className='mb-1'></FaArrowRight> </Link></Button>

                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Course;