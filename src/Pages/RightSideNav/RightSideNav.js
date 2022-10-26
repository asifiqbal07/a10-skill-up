import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaDiscord, FaInstagram, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Carousels from './Carousel/Carousels';

const RightSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://skill-up-server-asifiqbal07.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='sticky-top shadow mt-3 mt-lg-5 mb-4 p-3'>
            
            <div className='ps-2'>
                <h4 className='text-center'>All Courses</h4>
                <div className='mt-3 ms-3'>
                {
                    categories.map(category => <h6 className='m-0' key={category.id}>
                        <Button variant="danger row justify-content-center w-100" className=''><Link to={`/courses/${category.id}`} className='text-decoration-none text-white'>{category.name}  <FaChevronRight></FaChevronRight> </Link></Button> <hr className='me-4' />
                    </h6>)
                }
                </div>
            </div>
            
            <div className=''>
                <div>
                    <Carousels></Carousels>
                </div>
                
                {/* <div className='mt-2'>
                <h5>Get Updates.</h5>
                <ButtonGroup vertical>
                    <Button variant="outline-dark" className='mb-2 px-lg-5'> <FaFacebook className='mb-1'></FaFacebook> Facebook</Button>
                    <Button variant="outline-dark" className='mb-2 px-lg-5'> <FaTwitter className='mb-1'></FaTwitter> Twitter</Button>
                    <Button variant="outline-dark" className='mb-2 px-lg-5'> <FaDiscord className='mb-1'></FaDiscord> Discord</Button>
                    <Button variant="outline-dark" className='mb-2 px-lg-5'> <FaInstagram className='mb-1'></FaInstagram> Instagram</Button>
                </ButtonGroup>
            </div> */}

            </div>
            
        </div>
    );
};

export default RightSideNav;