import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade className='my-1'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/tKNWnsz/banner1.jpg"
                    width={"800px"}
                    height={"500px"}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Programming in C</h3>
                    <p>The book starts off by explaining the ideas of compilation, linking and so on but without referring to any particular implementation.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/3cm4H4c/banner2.jpg"
                    width={"800px"}
                    height={"500px"}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Brilliant HTML5 and CSS3</h3>
                    <p>HTML5 and CSS3 are important but there is a problem for any book covering them.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Kws9XQ4/banner3.jpg"
                    width={"800px"}
                    height={"500px"}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Joomla! Bible</h3>
                    <p>This is a promising book if you want to find out how to use the Joomla! CMS (content management system) - mainly because it has a colourful cover and is very thick.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;