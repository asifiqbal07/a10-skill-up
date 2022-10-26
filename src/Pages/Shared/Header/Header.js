import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(e=>console.error(e))
}

    return (
        <div className=''>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3 shadow-sm'>
                <Container>
                    <Navbar.Brand>
                        <Link className='fw-bolder text-black text-decoration-none flex' to={'/'}>
                            <Image
                                style={{ height: '45px' }}
                                roundedCircle
                                src={logo}>
                            </Image>
                            <span className='ms-2 mt-2 fs-4'>Skill <span className='text-danger'>Up</span></span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/courses' className='text-decoration-none text-black fw-semibold'>Courses</Link> </Nav.Link>
                            <Nav.Link><Link to='/blog' className='text-decoration-none text-black fw-semibold'>Blog</Link> </Nav.Link>
                            <Nav.Link><Link to='/faq' className='text-decoration-none text-black fw-semibold'>FAQ</Link> </Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                    <>
                                    <span>{user?.displayName}</span>
                                    <Button onClick={handleLogOut} className='ms-3' variant="outline-dark">Log Out</Button>
                                    </>
                                    :
                                    <>
                                    <Link to='/login' className='text-dark text-decoration-none mx-2'>Login</Link>
                                    <Link to='/signup' className='text-dark text-decoration-none mx-2'>SignUp</Link>
                                    </>
                                }
                                </Nav.Link>

                            <Nav.Link>
                                {user?.photoURL ?
                                <Image style={{height:'35px'}} roundedCircle src={user.photoURL}></Image>
                                :
                                <Link to='/login'><FaUser className='text-dark'></FaUser></Link>
                            }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;