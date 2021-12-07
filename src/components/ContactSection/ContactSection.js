import React from 'react';
import './ContactSection.scss';
import SectionTitle from '../SectionTitle/SectionTitle'
import Button from '../Button/Button'

function ContactSection() {
  return (
    <section id='contact__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--left'
          subtitle='contato'
          title='vamos tomar um café e mudar o futuro do seu negócio?'
        />
        <div className="contact-icons">
          
        </div>
      </div>
    </section>
  )
}

export default ContactSection
