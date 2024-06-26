import React from 'react';
import './footer.css'
import { Container,Row, Col, ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import logo from '../../images/logo.png'
import { RiMailLine } from 'react-icons/ri';
import { IoLocation } from 'react-icons/io5';


const quick__links = [
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

const quick_links2 = [
  {
      path: '/gallery',
      display: 'Gallery'
  },
  {
      path: '/login',
      display: 'Login'
  },
  {
      path: '/register',
      display: 'Register'
  },
]


const Footer = () => {

  const year = new Date().getFullYear()

  return (

<footer className='footer'>
<Container>
  <Row>
    <Col lg="3">
      <div className='logo'>
<img src={logo} alt="" />
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, perferendis?</p>
    <div className="social__links d-flex align-items-center gap-4">
<span>
  <Link to='#'><FaYoutube /></Link>
</span>
<span>
  <Link to='#'><FaGithub /></Link>
</span>
<span>
  <Link to='#'><FaFacebook /></Link>
</span>
<span>
  <Link to='#'><FaInstagram /></Link>
</span>
    </div>
      </div>
    </Col>

<Col lg='3'>
  <h5 className='footer__link-title'>Discover</h5>
  <ListGroup className='footer__quick-links'>
{
  quick__links.map((item,index)=>(
    <ListGroupItem key={index} className='ps-0 border-0'>
<Link to={item.path}>{item.display}</Link>
    </ListGroupItem>
  ))
}
  </ListGroup>
</Col>
<Col lg='3'>
<h5 className='footer__link-title'>Discover</h5>
  <ListGroup className='footer__quick-links'>
{
  quick_links2.map((item,index)=>(
    <ListGroupItem key={index} className='ps-0 border-0'>
<Link to={item.path}>{item.display}</Link>
    </ListGroupItem>
  ))
}
  </ListGroup>
</Col>
<Col lg='3'>

<h5 className='footer__link-title'>Contact</h5>
<ListGroup className='footer__quick-links'>
<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

<h6 className='mb-0 d-flex align-items-center gap-2'>
  <span><IoLocation /></span>
  Address:
</h6>
<p className='mb-0'>Sylhet,Bangladesh</p>


</ListGroupItem>

<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

<h6 className='mb-0 d-flex align-items-center gap-2'>
  <span><RiMailLine /></span>
 Email:
</h6>
<p className='mb-0'>suju22@gmail.com</p>


</ListGroupItem>


<ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

<h6 className='mb-0 d-flex align-items-center gap-2'>
  <span><FaPhoneAlt /></span>
  Phone:
</h6>
<p className='mb-0'>+8801720929666</p>


</ListGroupItem>

</ListGroup>

</Col>

<Col lg='12' className='text-center pt-5'>
<p className="copyright">Copyright {year}, design and devlop by Sujait Ullah.All Rights reserved</p>
</Col>

  </Row>
</Container>
</footer>

  )
}

export default Footer
