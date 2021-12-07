import React from 'react';
import './ServicesSection.scss';
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'

function ServicesSection() {
  function currentAge() {
    var today = new Date();
    var birthday = new Date('15 sep 2000');
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    return age;
  };

  return (
    <section id='about__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--left'
          subtitle='servicos'
          title='saiba como posso ajudar o seu negócio'
        />
        
        <Button>{'contato >'}</Button>
      </div>
    </section>
  )
}

export default ServicesSection
