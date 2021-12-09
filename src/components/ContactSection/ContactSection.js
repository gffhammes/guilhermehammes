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
          <a href="" target='_blank'>
            <i class="fab fa-whatsapp"></i>
            <span>(47) 9256-9136</span>
          </a>
          <a href="" target='_blank'>
            <i class="fas fa-phone-alt"></i>
            <span>(47) 9 9256-9136</span>
          </a>
          <a href="" target='_blank'>
            <i class="far fa-envelope"></i>
            <span>hello@guilhermehammes.com.br</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
