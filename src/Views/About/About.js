import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function About(){
  return (
    <div>
      <Navbar />
    <div className="about-us-container">
      <section className="about-us-header">
        <h1>Welcome to CyberEase</h1>
        <p>Your One-Stop Solution for All Online Services</p>
      </section>

      <section className="about-us-content">
        <h2>Who We Are</h2>
        <p>
          At CyberEase, we understand the frustration of dealing with paperwork and long queues for essential services. That's why we offer a comprehensive range of online services that save you time and hassle. Whether you need to apply for an Aadhar card, PAN card, driving license, or any other government service, we've got you covered.
        </p>

        <h2>What We Offer</h2>
        <p>
          We provide more than 15 online services, ensuring that you can handle all your documentation needs from the comfort of your home. Our services include:
        </p>

        <ul className="services-list">
          <li>Aadhar Card Registration & Update</li>
          <li>PAN Card Application</li>
          <li>Driving License Application & Renewal</li>
          <li>Passport Application</li>
          <li>Voter ID Registration & Update</li>
          <li>Utility Bill Payments</li>
          <li>Bank Account Opening Assistance</li>
          <li>Income Tax Filing</li>
          <li>Digital Signature Certificates</li>
          <li>Government Exam Registration</li>
          <li>Property Tax Payments</li>
          <li>Insurance Premium Payments</li>
          <li>Railway Ticket Booking</li>
          <li>Flight Ticket Booking</li>
          <li>Mobile & DTH Recharge</li>
          <li>And Many More...</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <p>
          With CyberEase, you no longer need to worry about standing in long lines or navigating complex government websites. Our expert team ensures that your applications are processed efficiently and accurately. Here’s what sets us apart:
        </p>

        <ul className="benefits-list">
          <li>Quick and Easy Application Process</li>
          <li>24/7 Customer Support</li>
          <li>Secure and Confidential Services</li>
          <li>Experienced and Professional Team</li>
          <li>Affordable Pricing with No Hidden Fees</li>
          <li>Fast Turnaround Time</li>
        </ul>

        <p>
          At CyberEase, we are committed to providing you with the best online service experience. Let us take care of your documentation needs so you can focus on what truly matters.
        </p>
      </section>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
