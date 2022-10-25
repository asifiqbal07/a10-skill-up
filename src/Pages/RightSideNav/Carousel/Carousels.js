import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../../../assets/1.jpg'
import Photo2 from '../../../assets/2.jpg'

const Carousels = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <a href="https://www.fiverr.com/iqbalasif07?up_rollout=true" target='blank'>

                        <img
                            className="d-block img-thumbnail"
                            src={Photo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>Transform Your Career</h4>
                            <small>Top instructors from around the world teach millions of students</small>
                        </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://www.fiverr.com/iqbalasif07?up_rollout=true" target='blank'>
                        <img
                            className="d-block img-thumbnail"
                            src={Photo2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h4>Browse Our Free Courses</h4>
                            <small>Top instructors from around the world teach millions of students</small>
                        </Carousel.Caption>
                    </a>

                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousels;