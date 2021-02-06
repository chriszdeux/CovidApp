import React, { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
// import { getMyDate } from '../../helpers/getDate';
import '../../styles/header-style.css';

export const Navbar = () => {
  const myDate = new Date();
  const day = myDate.getDate();
  const month = myDate.getMonth() + 1;
  const year = myDate.getFullYear();


  const fullDate = `${month}/${day}/${year}`;


  return (
    <header className="container">
      <nav className="navbar">
        <h2 className="navbar--title">CovidApp</h2>
        <p className="navbar--date">{ fullDate }</p>
        <CgMenuGridR className="navbar--menu"/>
      </nav>
    </header>
  )
}
