import React from 'react';
import './BenefitsSection.scss';
import SectionTitle from '../SectionTitle/SectionTitle'
import BenefitsItem from '../BenefitsItem/BenefitsItem'
import Button from '../Button/Button'

function BenefitsSection() {
  return (
    <section id='benefits__section'>
      <div className="container">
        <SectionTitle
          textAlign='align--center'
          subtitle='vantagens'
          title='saiba os diferenciais dos sites que produzo'
        />
        <div className="benefits-items">
          <BenefitsItem
            iconPath='/images/icone-vantagens-01.png'
            title='Responsividade'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices nisi at malesuada egestas. Quisque ut vehicula lectus. Integer vitae quam erat.'
          />
          <BenefitsItem
            iconPath='/images/icone-vantagens-02.png'
            title='Mobile first'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices nisi at malesuada egestas. Quisque ut vehicula lectus. Integer vitae quam erat.'
          />
          <BenefitsItem
            iconPath='/images/icone-vantagens-03.png'
            title='Desempenho'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices nisi at malesuada egestas. Quisque ut vehicula lectus. Integer vitae quam erat.'
          />
          <BenefitsItem
            iconPath='/images/icone-vantagens-04.png'
            title='SEO'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices nisi at malesuada egestas. Quisque ut vehicula lectus. Integer vitae quam erat.'
          />
        </div>
        <Button>{'orçamento >'}</Button>
      </div>
    </section>
  )
}

export default BenefitsSection
