import React from 'react'
import { Navbar } from './components/header/Navbar'
import { Hero } from './components/hero/Hero';
import './styles/global-style.css';

export const CovidApp = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}
