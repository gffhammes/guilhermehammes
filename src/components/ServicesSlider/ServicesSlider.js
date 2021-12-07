import React, { Component } from "react";
import Slider from "react-slick";
import "./ServicesSlider.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class ServicesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
          <div className='card-services'>
            <h3>Site</h3>
            <p>O objetivo do site é posicionar sua marca no mundo digital. Num site você deve falar sobre o seu negócio, seu produto/serviço e disponibilizar meios de contato para o visitante, como WhatsApp, telefone e e-mail.</p>
          </div>
          <div className='card-services'>
            <h3>Landing page</h3>
            <p>A landing page, ou página de captura, é a página que deve receber o tráfego de campanhas digitais. Nela você foca nos principais pontos e diferenciais do seu produto. Geralmente entrega algum material rico ao visitante em troca de seu e-mail.</p>
          </div>
          <div className='card-services'>
            <h3>Hotsite</h3>
            <p>No hotsite você tem uma oportunidade de detalhar seu produto/serviço para uma promoção ou campanha específica. É um site mais simples e com prazo de validade.</p>
          </div>
          <div className='card-services'>
            <h3>E-commerce</h3>
            <p>O e-commerce, como o nome sugere, é uma loja virtual. Nela você pode comercializar seus produtos 24h por dia e 7 dias por semana por um custo muito baixo! </p>
          </div>
        </Slider>
    );
  }
}