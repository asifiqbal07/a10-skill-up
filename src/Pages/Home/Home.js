import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bg3 from '../../assets/3.webp'

const Home = () => {
    return (
        <div className='d-lg-flex align-items-center justify-content-between mt-lg-5'>
            <div className='w-lg-50 text-center text-lg-start'>
                <h1 className='fw-bold'><span className='text-danger'>Online</span> Tutorial From Top Instructor.</h1>
                <p>Meet university,and cultural institutions, who'll share their experience.</p>
                <Link to='courses'><Button variant="danger" className='mt-2'>Learn More</Button></Link>
            </div>

            <div>
                <img className='d-block img-fluid' src={bg3} alt="" />
            </div>
        </div>
    );
};

export default Home;