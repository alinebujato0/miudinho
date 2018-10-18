import React, { Component } from 'react';
import '../../App.css';

import Slider from "react-slick";

import Header from '../../components/header/Header';

// imagens

import imageA from '../../assets/images/comp1.jpeg';
import imageB from '../../assets/images/comp2.jpeg';
import imageC from '../../assets/images/comp3.jpeg';
import imageD from '../../assets/images/comp4.jpeg';
import imageE from '../../assets/images/comp5.jpeg';
import imageF from '../../assets/images/robo1.jpeg';
import imageG from '../../assets/images/robo2.jpeg';
import imageH from '../../assets/images/robo3.jpeg';
import imageI from '../../assets/images/robo4.jpeg';
import imageJ from '../../assets/images/robo5.jpeg';
import imageK from '../../assets/images/robo6.jpeg';
import imageL from '../../assets/images/robo7.jpeg';
import imageM from '../../assets/images/robo8.jpeg';

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

        <div id="content_fotos">

          <h1>Galeria de fotos</h1>

          <div className="box-slider">
          
            <Slider {...settings}>

              <div><img src={imageA} height="200" alt="Blabla" /></div>
              <div><img src={imageB} height="200" alt="Blabla" /></div>
              <div><img src={imageC} height="200" alt="Blabla" /></div>
              <div><img src={imageD} height="200" alt="Blabla" /></div>
              <div><img src={imageE} height="200" alt="Blabla" /></div>
              <div><img src={imageF} height="200" alt="Blabla" /></div>
              <div><img src={imageG} height="200" alt="Blabla" /></div>
              <div><img src={imageH} height="200" alt="Blabla" /></div>
              <div><img src={imageI} height="200" alt="Blabla" /></div>
              <div><img src={imageJ} height="200" alt="Blabla" /></div>
              <div><img src={imageK} height="200" alt="Blabla" /></div>
              <div><img src={imageL} height="200" alt="Blabla" /></div>
              <div><img src={imageM} height="200" alt="Blabla" /></div>

            </Slider>

          </div>

        </div>        
  
      </div>
  
    );

  }

}

export default Fotos;
