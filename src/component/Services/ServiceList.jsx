import React from 'react';

import { Col } from 'reactstrap';
import customizationImg from '../../images/customization.png';
import guideImg from '../../images/guide.png';
import weatherImg from '../../images/weather.png';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem10disofvduvndflsvndfkl"
    },
    {
        imgUrl: guideImg,
        title: "Best Tour guide",
        desc: "Lorem10disofvduvndflsvndfkl"
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Lorem10disofvduvndflsvndfkl"
    }
]

const ServiceList = () => {
    return (
      <>
      {
        servicesData.map((item,index) =>(<Col lg='3' key={index}><ServiceCard item={item}/></Col>))
      }
      </>
    );
};

export default ServiceList;