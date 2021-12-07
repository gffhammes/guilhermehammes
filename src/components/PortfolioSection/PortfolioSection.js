import React from 'react';
import './PortfolioSection.scss';
import SectionTitle from '../SectionTitle/SectionTitle'
import PortfolioItem from '../PortfolioItem/PortfolioItem'

function PortfolioSection() {
  return (
    <section id='portfolio__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--center'
          subtitle='portfolio'
          title='conheça o meu trabalho'
        />
        <PortfolioItem
          imgPath='/images/portfolio-credestados.png'
          title='CredEstados'
          resume='Site responsivo para promotora de crédito de Balneário Camboriú/SC.'
          stacks={['HTML', 'Sass', 'Javascript', 'ReactJs']}
        />
        <PortfolioItem
          imgPath='/images/portfolio-don-toro.png'
          title='Don Toro'
          resume='Site responsivo para açougue de Joinville/SC.'
          stacks={['HTML', 'CSS', 'Javascript']}
        />
      </div>
    </section>
  )
}

export default PortfolioSection
