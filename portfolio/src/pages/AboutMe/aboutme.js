import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import image from '../../images/IMG_1619.jpg'

const imageStyle = {
  width: '500px',
  height: 'auto',
  clear: 'both',
}

const style2 = {
  clear: 'both',
  margin: "20px 0"
}

const style3 = {
  clear: 'both'
}

const containerStyle = {
  margin: "0 auto"
}

function AboutMe() {
  return (
    <div>
      <Header />
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className='col-12'>
            <h2 style={style2}><strong>About Me</strong></h2>
            <hr />
            <img src={image} alt='#' style={imageStyle}></img>
            <h6 style={style3}>My name is Samuel Meyer. And welcome to my web development portfolio. </h6> 
            <h6 style={style3}>I am 23 years old. I am from, and currently live in, Seattle, Washington. I recieved a Bachelors of Arts in Photography with a minor in Business Administration from the Univeristy of Redlands in southern California. I then went on, a few years after graduation, to study web development part time at the University of Washington. I am currently working as a studio photographer but looking for further opportunities in the web development and web design arenas.</h6>
            <h6 style={style3}>I am very interested in Front End web development and web design. I have a background in Photography so my eye for detail and aesthetics is pretty keen. I would love to learn as much as I can about the web development arena as well as practice and refine the skills I currently possess. I am more confident in HTML, CSS, JavaScript and React but have some basic knowledge in back end MERN technologies as well. I have gained the skills necessary to create and design viable websites and user interfaces. I would like to continue growing my skills and learning new things along the way.</h6>
          </div>
        </div>

      </div>
      <Footer />
    </div>

  )
}

export default AboutMe;