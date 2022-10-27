import React from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';


const PremiumVersion = () => {
    const coursesPremium = useLoaderData();
    const { name } = coursesPremium;

    const handleGetNow = () => {
        toast.error('Look at your bank Balance.')
    }

    return (
        <div className=''>
            <h2 className='text-center fw-bold'>Premium Version</h2>
            <h4 className='text-center mt-3 fw-bolder'>Courses Name: <span className='text-danger'>{name}.</span></h4>
            <div className='d-lg-flex justify-content-center'>
                <div className='bg-light p-2 mt-3 rounded-2 shadow-sm'>
                    <p className='mt-2'><FaCheckCircle className='mx-2 text-danger'></FaCheckCircle> VIP Support</p>
                    <hr className='w-75 mx-auto text-danger' />
                    <p><FaCheckCircle className='mx-2 text-danger'></FaCheckCircle> 5 Extra Modules</p>
                    <hr className='w-75 mx-auto text-danger' />
                    <p className='me-5'><FaCheckCircle className='mx-2 text-danger'></FaCheckCircle> Extra Notes and Quizzes</p>
                    <hr className='w-75 mx-auto text-danger' />
                    <p><FaCheckCircle className='mx-2 text-danger'></FaCheckCircle> Certificate</p>
                    <div className='d-flex justify-content-center mt-4'>
                        <Button onClick={handleGetNow} className='text-center px-5' variant="danger"><span className='px-5'>Get Now</span></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumVersion;