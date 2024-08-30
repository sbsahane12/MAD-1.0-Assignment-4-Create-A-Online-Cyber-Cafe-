import React from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Contact  ()  {
  return (
    <div>
      <Navbar />
    <div className="contact-us-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us using any of the methods below.</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Our Address</h2>
          <p>CyberEase</p>
          <p>101 Pune</p>
          <p>Pune, MH,422601</p>
        </div>

        <div className="contact-info">
          <h2>Email Us</h2>
          <p>Email: <a href="mailto:sbsahane23@gmail.com">sbsahane23@gmail.com</a></p>
          <p>Support: <a href="mailto:sbsahane33@.com">sbsahane33@gmail.com</a></p>
        </div>

        <div className="contact-info">
          <h2>Call Us</h2>
          <p>Phone: +91 8999280563</p>
          <p>Fax: +91 9673171982</p>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Contact;
