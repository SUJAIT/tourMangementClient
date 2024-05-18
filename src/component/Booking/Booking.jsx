import React from 'react'
import './Booking.css'
import { Button, Form, FormGroup, ListGroup, ListGroupItem } from 'reactstrap'



const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour;

    const handleChange = e => {};

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
<Form className='booking__info-form'>
<FormGroup>
    <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange}/>
</FormGroup>
<FormGroup>
    <input type="number" placeholder='Phone' id='phone' required onChange={handleChange}/>
</FormGroup>
<FormGroup className='d-flex align-item-center gap-3'>
    <input type="date" placeholder='Full Name' id='bookAt' required onChange={handleChange}/>
    <input type="number" placeholder='Full Name' id='guestSize' required onChange={handleChange}/>
</FormGroup>
</Form>
</div>
{/* Booking form start */}

        </div>
    )
}

export default Booking
