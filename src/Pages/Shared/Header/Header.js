import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Light', value: '1' },
        { name: 'Dark', value: '2' },
    ];

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

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
                            <span className='ms-2 mt-2 fs-3'>Skill <span className='text-danger'>Up</span></span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav><Link to='/courses' className='text-decoration-none text-dark fw-semibold m-2 m-lg-3'>Courses</Link> </Nav>
                            <Nav><Link to='/blog' className='text-decoration-none text-dark fw-semibold m-2 m-lg-3'>Blog</Link> </Nav>
                            <Nav><Link to='/faq' className='text-decoration-none text-dark fw-semibold m-2 m-lg-3'>FAQ</Link> </Nav>
                            <Nav><Link to='/live' className='text-decoration-none text-dark fw-semibold m-2 m-lg-3'>Live</Link> </Nav>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav>
                                <ButtonGroup>
                                    {radios.map((radio, idx) => (
                                        <ToggleButton className='border-0'
                                            key={idx}
                                            id={`radio-${idx}`}
                                            type="radio"
                                            variant={idx % 2 ? 'outline-dark' : 'outline-danger'}
                                            name="radio"
                                            value={radio.value}
                                            checked={radioValue === radio.value}
                                            // onClick={(event) => {
                                            //     if (event === 'outline-dark') {
                                            //         toast('Hello Darkness!',
                                            //             {
                                            //                 icon: '👏',
                                            //                 style: {
                                            //                     borderRadius: '10px',
                                            //                     background: '#333',
                                            //                     color: '#fff',
                                            //                 },
                                            //             }
                                            //         );
                                            //     }
                                            // }}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Nav>
                            <Nav>
                                {
                                    user?.uid ?
                                        <>
                                            <Link to='/profile'>
                                                <Button variant="outline-danger" className='border-0 fw-semibold'>{user?.displayName}</Button>
                                            </Link>


                                            <Button onClick={handleLogOut} className='border-0 fw-semibold' variant="outline-dark">Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='text-dark text-decoration-none mx-2'>Login</Link>
                                            <Link to='/signup' className='text-dark text-decoration-none mx-2'>SignUp</Link>
                                        </>
                                }
                            </Nav>

                            <Nav className='ms-lg-3'>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    {user?.photoURL ?
                                        <Link to='/profile'><Image style={{ height: '35px' }} roundedCircle src={user.photoURL}></Image></Link>
                                        :
                                        <Link to='/login'><FaUser className='text-dark'></FaUser></Link>
                                    }
                                </OverlayTrigger>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;