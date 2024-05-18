import React, { useState } from 'react'
import './Login.css'

import registerImg from '../../images/register.png'
import userIcon from '../../images/user.png'
import { Button, Col, Container, Form, FormGroup, Row } from 'reactstrap'
import { Link } from 'react-router-dom'


const Register = () => {

  const [credentials, setCredentials] = useState({
    userName:undefined,
  email:undefined,
  password: undefined
});


  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
};


const handleClick = e =>{
  e.preventDefault()
}


  return (
    
    <section>
      <Container>
        <Row>
          <Col lg="8" className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt="" />
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type='text' placeholder='Username' required id='username' onChange={handleChange}></input>
                </FormGroup>
                <FormGroup>
                  <input type='email' placeholder='Email' required id='email' onChange={handleChange}></input>
                </FormGroup>
                <FormGroup>
                  <input type='password' required id='password' placeholder="Password" onChange={handleChange}></input>
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
              </Form>
              <p>Already have an account?<Link to='/login'>Create</Link></p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default Register

