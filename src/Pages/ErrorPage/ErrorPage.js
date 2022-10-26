import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/logo.png'

const ErrorPage = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-center">This Route is not Found <span className='text-danger'>4O4!</span></h1>
                <div className=''>
                    <img className='img fluid w-75' src={logo2} alt="" srcset="" />
                    <div className='d-flex align-items-center text-center justify-content-center mt-5'>
                        <span>Go back to the</span> <span><Link className='text-decoration-none ms-2' to='/'>Home Page.</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;