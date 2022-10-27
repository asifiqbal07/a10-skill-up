import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='text-center'>
            <h2>User Profile</h2>
            <div className='mt-4'>
                {user?.photoURL ?
                    <Image
                        style={{ height: '100px' }}
                        roundedCircle
                        src={user?.photoURL}>
                    </Image>
                    : <FaUser></FaUser>
                }
            </div>
            <h4 className='mt-2 fw-bold'>{user?.displayName}</h4>
            <p>{user?.email}</p>
        </div>
        </div>
    );
};

export default Profile;