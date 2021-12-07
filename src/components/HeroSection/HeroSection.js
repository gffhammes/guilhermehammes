import React from 'react';
import './HeroSection.scss';
import Button from '../Button/Button';

function HeroSection() {
  return (
    <section id='hero__section'>
      <div className="container">
        <h1>
          olá, eu sou<br/>
          <strong>guilherme hammes</strong> /><br/>          
          <p>
            <strong>desenvolvedor front-end</strong><br/> 
            desenvolvo sites, landing pages, hotsites e e-commerces responsivos e otimizados para os motores de busca
          </p>
        </h1>
        <Button btnSize='btn--large' targetId='about__section'>{'saber mais >'}</Button>
      </div>
    </section>
  )
}

export default HeroSection
