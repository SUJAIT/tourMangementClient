import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import heroImg from '../../images/hero-img01.jpg';
import heroImg2 from '../../images/hero-img02.jpg';
import heroVedio from '../../images/hero-video.mp4';
import worldImg from '../../images/world.png';
import ServiceList from '../Services/ServiceList';
import experienceImg from '../../images/experience.png';

import Subtitle from '../Sheared/Subtitle/Subtitle';
import './Home.css';
import SearchBar from '../Sheared/SearchBar/SearchBar';
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import Testimonial from '../Testimonial/Testimonial';
import Newsletter from '../Sheared/Newsletter/Newsletter';



const Home = () => {
    return (
        <>
            {/* Hero section start */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className='hero_content'>
                                <div className='hero_subtitle d-flex align-items-center'>
                                    <Subtitle subtitle={"Know Before You Go"} />
                                    <img src={worldImg}></img>
                                </div>
                                <h1>
                                    Traveling opens the door to creating{" "}
                                    <span className='highlight'>memories</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ab dicta delectus magnam maiores quidem alias corporis fugiat eaque vitae?</p>
                            </div>
                        </Col>

                        {/* box Start */}
                        <Col lg="2">
                            <div className='hero_img-box'>
                                <img src={heroImg}></img>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero_img-box mt-4'>
                                <video src={heroVedio} controls></video>
                            </div>
                        </Col>
                        <Col lg="2">
                            <div className='hero_img-box mt-5'>
                                <img src={heroImg2}></img>
                            </div>
                        </Col>

                        {/* box end */}

                        {/* search_bar start */}
                        <SearchBar></SearchBar>
                        {/* search_bar end */}


                    </Row>
                </Container>
            </section>
            {/* Hero section End */}
            {/* Hero Section start */}
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className='services_subtitle'>What we Serve</h5>
                            <h2 className='services_title'>We Offer Our best Service</h2>
                        </Col>
                        <ServiceList></ServiceList>
                    </Row>
                </Container>
            </section>
            {/* Hero Section end */}
            {/* featured tour section start */}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle subtitle={"Explore"}>

                            </Subtitle> <h2 className='featured__tour-title'>Our featured tours</h2>

                        </Col>
                        <FeaturedTourList></FeaturedTourList>
                    </Row>
                </Container>
            </section>
            {/* featured tour section end */}
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <div className='experience__content'>
                                <Subtitle subtitle={"Experience"}> </Subtitle>
                                <h2>
                                    With Our all experience <br /> we will serve you
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Eos, expedita sit alias saepe nihil obcaecati!
                                </p>

                            </div>
                            <div className='counter__wrapper d-flex align-items-center gap-5'>
                                <div className='counter__box'>
                                     <span>12k+</span>
                                     <h6>Successfull Trip</h6>
                                </div>
                                <div className='counter__box'>
                                     <span>2k+</span>
                                     <h6>Regular Clients</h6>
                                </div>
                                <div className='counter__box'>
                                     <span>15</span>
                                     <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6">
                            <div className='experience__img'>
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

{/* experience section end  */}

{/* gallery section start */}
<section>
    <Container>
        <Row>
            <Col lg="12">
            <Subtitle subtitle={"Gallery"}/>
            <h2 className='gallery__title'>
                Visit our customers tour gallery
            </h2>
            </Col>
            <Col lg="12">
            <MasonryImagesGallery></MasonryImagesGallery>
            </Col>
        </Row>
    </Container>
</section>
{/* gallery section end */}

{/* testimonial section start  */}
<section>
    <Container>
        <Row>
            <Col lg="12">
                <Subtitle subtitle={'Fans Love'} />
                <h2 className='testimonial__title'>What our fans say about us</h2>
            </Col>
            <Col lg="12">
                <Testimonial />
            </Col>
        </Row>
    </Container>
</section>
{/* testimonial section end */}


<Newsletter/>



        </>
    );
};

export default Home;