import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Contact.css'
// import ContactUs from '../../components/Forms'

export default function Contact() {

  return (
    <div className='main-container'>
      <Header />
      <div className="container">
        <div className="row">
          <div className='col-12'>
            <h2>Contact</h2>
            <hr />
            <div className="card">
              <h6 className="contact-type email">Email: </h6> <h6 className="contact-name email-content">sam.smeyer17@gmail.com</h6>
              <h6 className="contact-type phone">Phone Number: </h6> <h6 className="contact-name phone-content">(206) 519-2266</h6>
              <h6 className="contact-type github">GitHub: </h6> <h6 className="contact-name github-content">https://github.com/samsmeyer17</h6>
              <h6 className="contact-type linkedin">LinkedIn: </h6> <h6 className="contact-name linkedin-content">www.linkedin.com/in/samuel-meyer-659b12143</h6>
            </div>

            {/* <ContactUs /> */}

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}