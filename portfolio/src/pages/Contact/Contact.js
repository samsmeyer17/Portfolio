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
            </div>

            {/* <ContactUs /> */}

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}