import React, { Component } from 'react';

import Slider from "react-slick";

import Header from '../../components/header/Header';

// imagens

import imageA from '../../assets/images/robot_a.jpg';
import imageB from '../../assets/images/robot_b.jpg';
import imageC from '../../assets/images/robot_c.jpg';

class Fotos extends Component {

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
    };
    
    return (
  
      <div id="container">
  
        <Header />

        <div id="content">

          <h1>Qualquer fucking galeria de fotos</h1>

          <div className="box-slider">
          
            <Slider {...settings}>

              <div><img src={imageA} height="200" alt="Blabla" /></div>
              <div><img src={imageB} height="200" alt="Blabla" /></div>
              <div><img src={imageC} height="200" alt="Blabla" /></div>
              <div><img src={imageA} height="200" alt="Blabla" /></div>
              <div><img src={imageB} height="200" alt="Blabla" /></div>
              <div><img src={imageC} height="200" alt="Blabla" /></div>

            </Slider>

          </div>

        </div>        
  
      </div>
  
    );

  }


}

export default Fotos;
