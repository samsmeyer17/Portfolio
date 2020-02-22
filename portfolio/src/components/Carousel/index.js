import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';
import dcImage from '../../images/24698886198_0fc656906c_o.jpg'

const style = {
  width: "100%",
  height: 'auto',
  color: 'white',
  position: 'relative'
}

class WorkCarousel extends Component {
  render() {
    return (
      <div className="carouselbody">
        <Carousel>
          
          <a className="carousel-link" href={'https://samsmeyer17.github.io/flash-trivia/'} style={style}>
            <h6 style={style}>The Flash Trivia</h6>
            <img alt="Flash Trivia" src='https://res.cloudinary.com/teepublic/image/private/s--jeoVrKe8--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1446245482/production/designs/301566_1.jpg'>
            </img>
            
          </a>
          <a className="carousel-link" href={"https://still-depths-92325.herokuapp.com/"}>
          <h6 style={style}>Swim Tracker</h6>
            <img alt="" src='https://storage.needpix.com/rsynced_images/swimming-2616746_1280.jpg'>
            </img>
            <h3 style={style}> Swim Tracker</h3>
          </a>
          <a className="carousel-link" href={"https://samsmeyer17.github.io/Crystal-Collector/"}>
          <h6 style={style}>Crystal Collector</h6>
            <img alt="" src='https://live.staticflickr.com/40/91712256_1d4fdc3f04_b.jpg'>
            </img>
            
          </a>
          <a className="carousel-link" href={"https://dc-comics-mongo-scraper.herokuapp.com/"}>
          <h6 style={style}>DC Comics Scraper</h6>
            <img alt="" src={dcImage}>
            </img>
            
          </a>

        </Carousel>
      </div>
    )
  }
}

export default WorkCarousel;