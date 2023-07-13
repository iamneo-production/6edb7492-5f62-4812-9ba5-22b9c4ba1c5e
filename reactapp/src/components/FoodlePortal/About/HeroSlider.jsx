import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImg01 from "../../assets/slider1.png";
import sliderImg02 from "../../assets/slider2.png";
import sliderImg03 from "../../assets/slider03.png";
import "./slider.css";

const HeroSlider = () => {
  const sliderData = [
    {
        id: "01",
        title: "We have simple and delicious food for you",
        desc: "Food Exploration Redefined: Uncover hidden gems and culinary masterpieces.",
        imgUrl: sliderImg01,
      },
      {
        id: "02",
        title: "We believe good food over great smile",
        desc: "Taste the Good Life: Indulge in a menu of exquisite delights, just a tap away",
        imgUrl: sliderImg02,
      },
      {
        id: "03",
        title: "Meet, Eat and Enjoy the true test",
        desc: "Savor Every Bite: Experience the finest cuisines from top-rated restaurants",
        imgUrl: sliderImg03,
      },
    // Add more slider data objects as needed
  ];

  return (
    <section>
      <Container>
        <Slider>
          
          {sliderData.map((item) => (
            <div key={item.title}>
              <div className='slider-wrapper '>
                <div className='slider_content '>
                  <h2 className='mb-3'>{item.title}</h2>
                  <br/>
                  <br/>
                  <br/>
                  <p >{item.desc}</p>
                </div>
                <div className='slider-img '>
                  <img src={item.imgUrl} alt='' className='w-100' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider;
