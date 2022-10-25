import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3'>
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
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;