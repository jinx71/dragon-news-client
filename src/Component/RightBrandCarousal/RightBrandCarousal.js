import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../Asset/brand-1.png';
import Brand2 from '../../Asset/brand-2.png'

const RightBrandCarousal = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default RightBrandCarousal;