import React from "react";
import {motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../style/Contact.css';

function Contact() {
  return (
       <div className="contact-container">
          <motion.h1>Contact Us</motion.h1>
         <motion.p className="contact-description">
          Get in touch with us for any queries.
        </motion.p>
        <motion.div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="icon" /> info@airesume.com 
          </div>
          <div className="info-item">
          <FaPhone className="icon" /> +123 456 7890
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="icon" /> Kathmandu, Nepal
        </div>
        </motion.div>
        <motion.div className="contact-form">
             <h2>Send Us a Message</h2>  
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required></input>
              </div>
           <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>

            </form>
        </motion.div> 
      </div>
   );
}

export default Contact;