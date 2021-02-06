import React from 'react'
import covidImg from '../../images/covid.jpg';
import covidImg2 from '../../images/covid_img_2.jpg';

import '../../styles/hero-style.css';
export const Hero = () => {
  return (
    <main className="hero container">
      <figure className="hero__img__container">
        <img className="hero--img" src={ covidImg2 } alt=""/>
      </figure>
      <p className="hero--info">Lorem ipsum dolor sit amet consectetur </p>
    </main>
  )
}
