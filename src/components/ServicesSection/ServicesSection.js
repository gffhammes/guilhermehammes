import React from 'react';
import './ServicesSection.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';
import ServicesSlider from '../ServicesSlider/ServicesSlider';

function ServicesSection() {
  return (
    <section id='services__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--left'
          subtitle='serviços'
          title='veja como posso ajudar o seu negócio'
        />
      </div>
      <ServicesSlider />
      <Button>{'contato >'}</Button>
    </section>
  )
}

export default ServicesSection
