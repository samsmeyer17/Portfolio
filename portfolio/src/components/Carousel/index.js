import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';

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
            <img alt="Flash Trivia" src='https://res.cloudinary.com/teepublic/image/private/s--jeoVrKe8--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1446245482/production/designs/301566_1.jpg'>
            </img>
            
          </a>
          <a className="carousel-link" href={"https://still-depths-92325.herokuapp.com/"}>
            <img alt="" src='https://storage.needpix.com/rsynced_images/swimming-2616746_1280.jpg'>
            </img>
            <h3 style={style}> Swim Tracker</h3>
          </a>
          <a className="carousel-link" href={"https://samsmeyer17.github.io/Crystal-Collector/"}>
            <img alt="" src='https://live.staticflickr.com/40/91712256_1d4fdc3f04_b.jpg'>
            </img>
            
          </a>

        </Carousel>
      </div>
    )
  }
}

export default WorkCarousel;