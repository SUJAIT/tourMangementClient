import React, { useRef, useState } from 'react'
import './TourDetails.css'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import tourData from '../../assets/data/tours'
import calculateAvgRating from '../Utils/AvgRating'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa'
import { MdOutlineMonetizationOn } from 'react-icons/md'
import { RiMapPinTimeLine, RiMapPinUserLine } from 'react-icons/ri'
import { FaUserGroup } from 'react-icons/fa6'
import { Form, ListGroup } from 'reactstrap'
import avatar from "../../images/avatar.jpg"
import Booking from '../Booking/Booking'
import Newsletter from '../Sheared/Newsletter/Newsletter'

const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)


  //this is an static data later we will call our Api and load our data from database
  const tour = tourData.find(tour => tour.id == id)
  //destructure properties from tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour


  const { totalRating, avgRating } = calculateAvgRating(reviews)

  //format date 
  const options = { day: 'numeric', month: "long", year: "numeric" };

  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating}`)
  }


  return (


    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">

                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <ion-icon name="star" style={{ 'color': "var(--secondary-color)" }}></ion-icon>{avgRating == 0 ? null : avgRating} {totalRating == 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                    </span>

                    <span>
                      <FaMapMarkerAlt /> {address}
                    </span>

                  </div>
                  <div className='tour__extra-details'>
                    <span>
                      <RiMapPinUserLine /> {city}
                    </span>
                    <span>
                      <MdOutlineMonetizationOn /> {price}
                    </span>
                    <span>
                      <RiMapPinTimeLine /> {distance} k/M
                    </span>
                    <span>
                      <FaUserGroup /> {maxGroupSize}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* tour reviews section start*/}
                <div className='tour__reviews mt-4'>
                  <h4>Reviews ({reviews?.length}reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      <span onClick={() => setTourRating(1)}><FaStar /></span>
                      <span onClick={() => setTourRating(2)}><FaStar /></span>
                      <span onClick={() => setTourRating(3)}><FaStar /></span>
                      <span onClick={() => setTourRating(4)}><FaStar /></span>
                      <span onClick={() => setTourRating(5)}><FaStar /></span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
                      <button className='btn primary__btn text-white' type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {reviews?.map(reviews => (
                      <div className="review__item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>muhib</h5>
                              <p>
                                {new Date("01-18-2024").toLocaleDateString(
                                  "en-US", options
                                )}
                              </p>
                            </div>
                            <span className='d-flex align-items-center'>
                              5 <FaStar />
                            </span>
                          </div>
                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>

                </div>
                {/* tour reviews section end*/}

              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating}>

              </Booking>
            </Col>

          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>


  )
}

export default TourDetails
