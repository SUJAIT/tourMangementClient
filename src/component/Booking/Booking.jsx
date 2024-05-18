import React, { useState } from 'react'
import './Booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'
import { RiCloseLine } from 'react-icons/ri';



const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour;

    const [credentials, setCredentials] = useState({
        userId: "01",
        userEmail: 'sujait@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };


    const handleClick = e => {
        e.preventDefault();
        console.log(credentials);
    }




    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price}<span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <ion-icon name="star" ></ion-icon>
                    {avgRating == 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* Booking form start */}
            <div className='booking__form'>
                <h5>Information</h5>
                <Form className='booking__info-form' onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-item-center gap-3'>
                        <input type="date" placeholder='Full Name' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='Full Name' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* Booking form end */}

            {/* booking bottom start */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>${price} <RiCloseLine /> 1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>$100</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div>
            {/* booking bottom end */}

        </div>
    )
}

export default Booking
