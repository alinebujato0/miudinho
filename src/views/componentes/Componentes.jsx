import React, { Component } from 'react';
import '../../App.css';
import Header from '../../components/header/Header';

import Slider from "react-slick";

import imageAline from '../../assets/images/aline.png';
import imageGabriel from '../../assets/images/gabriel.png';
import imageHenrique from '../../assets/images/henrique.png';
import imageJuan from '../../assets/images/juan.png';

class Componentes extends Component {

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
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

      <div id="content_componentes">

        <h2>O grupo DECEPTICON é formado pelos integrantes abaixo:</h2>
        <div className="box-slider">
          
          <Slider {...settings}>

            <div><img src={imageAline} height="200" alt="Aline" /></div>
            <div><img src={imageGabriel} height="200" alt="GAbriel" /></div>
            <div><img src={imageHenrique} height="200" alt="Henrique" /></div>
            <div><img src={imageJuan} height="200" alt="Juan" /></div>

          </Slider>

          <div id="nomes_componentes">
            <div><p>Aline Bujato <br /> 18 anos</p></div>
            <div><p>Gabriel Franham <br /> 18 anos</p></div>
            <div><p>Henrique Akira <br /> 20 anos</p></div>
            <div><p>Juan Navarro <br /> 18 anos</p></div>
          </div>
          </div>
      </div>
    </div>
    )
  }
}
export default Componentes;