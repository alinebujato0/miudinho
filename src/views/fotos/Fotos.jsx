import React, { Component } from 'react';
import '../../App.css';

import Slider from "react-slick";

import Header from '../../components/header/Header';

// imagens

import imageA from '../../assets/images/comp1';
import imageB from '../../assets/images/comp2';
import imageC from '../../assets/images/comp3';
import imageD from '../../assets/images/comp4';
import imageE from '../../assets/images/comp5';
import imageF from '../../assets/images/comp6';
import imageG from '../../assets/images/robo1';
import imageH from '../../assets/images/robo2';
import imageI from '../../assets/images/robo3';
import imageJ from '../../assets/images/robo4';
import imageK from '../../assets/images/robo5';
import imageL from '../../assets/images/robo6';
import imageM from '../../assets/images/robo7';
import imageN from '../../assets/images/robo8';

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
              <div><img src={imageN} height="200" alt="Blabla" /></div>

            </Slider>

          </div>

        </div>        
  
      </div>
  
    );

  }


}

export default Fotos;
