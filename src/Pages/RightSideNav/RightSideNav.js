import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaChevronRight } from "react-icons/fa";
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
        <div className='sticky-top shadow rounded-3 mt-3 mt-lg-5 mb-4 p-3'>
            
            <div className='ps-2'>
                <h4 className='text-center'>Check All Courses</h4>
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
            </div>
            
        </div>
    );
};

export default RightSideNav;