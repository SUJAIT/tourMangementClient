import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Row } from 'reactstrap';
import logo from '../../images/logo.png';
import '../Header/Header.css'

const Header = () => {
    const nav_links = [
        {
            path: '/',
            display: 'Home'
        },
        {
            path: '/about',
            display: 'About'
        },
        {
            path: '/tour',
            display: 'Tours'
        },
    ]
    return (
        <div className="header">
            <Container>
                <Row>
                    <div className='nav-wrapper d-flex align-items-center justify-content-between'>
                        {/* logo start */}
                        <div className='logo'>
                            <img src={logo} alt="" />
                        </div>
                        {/* logo end */}
                        {/* Menu Start  */}
                        <div className='navigation'>
                            <ul className='menu d-flex align-items-center gap-5'>
                                {
                                    nav_links.map((item, index) => (
                                        <li className='nav_item' key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? "active_link" : ""}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Menu End  */}
                        {/* todo */}
                        <div className='nav_right d-flex align-items-center gap-4'>
                            <div className='nav_btns d-flex align-items-center gap-4'>
                                <Button className='btn secondary__btn'><Link to="/login">Login</Link></Button>


                                <Button className='btn primary__btn'><Link to="/register">Register</Link></Button>



                            </div>
                            <span className='mobile_menu'>
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>
                        {/* todo */}



                    </div>

                </Row>
            </Container>
        </div>
    );
};

export default Header;