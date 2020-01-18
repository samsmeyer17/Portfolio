import './index.css';
import React from 'react';
import emailjs from 'emailjs-com';
require('dotenv').config()

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', "template_IlPUk4Gq" , e.target, "user_vIgsqQAf7FJMMX98u5fD4")
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="reply_from" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Phone Number</label>
      <input type="number" name="phoneNumber" />
      <label>Subject</label>
      <input type="text" name="reply_to"/>
      <label>Message</label>
      <textarea name="note" />
      <input type="submit" value="Send" />
    </form>
  );
}