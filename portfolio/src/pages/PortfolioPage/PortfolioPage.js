import React from 'react';
import WorkCarousel from '../../components/Carousel'
import Header from '../../components/Header'
import './Portfolio.css'
import Footer from '../../components/Footer'

export default function Porfolio() {

  const style2 = {
    margin: "20px 0 0 0",
  }

  return (
    <div className='main-container'>
      <Header />
      <h2 style={style2}>Portfolio</h2>
      <WorkCarousel />
      <Footer />
    </div>
  )
}