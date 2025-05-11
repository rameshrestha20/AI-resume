import React from 'react';
import Footer from '../components/footer';
import "../style/about.css"

function About() {
  return (
    <div className='about-us-container'>
      <div className='about-us-content'>
        <h1>About AI Resume Analyzer</h1>
        <p className='about-us-description'>
          Welcome to the <strong>AI Resume Analyzer</strong>, a cutting-edge system designed to intelligently rank job applications using 
          artificial intelligence. Our platform helps recruiters and job seekers by analyzing resumes and matching skills, experience, and 
          other relevant criteria to job descriptions. We aim to streamline the hiring process and make job applications smarter and more efficient.
        </p>
        <div className='team-container'>
          <h2>Our Team</h2>
          <div className='team-members'>
            <div className='team-member'>
              <h3>John Doe</h3>
              <p>Lead Developer</p>
            </div>
            <div className='team-member'>
              <h3>Jane Smith</h3>
              <p>AI Specialist</p>
            </div>
            <div className='team-member'>
              <h3>Michael Brown</h3>
              <p>Product Manager</p>
            </div>
          </div>
          <Footer>{Footer}</Footer>

        </div>
      </div>
      </div>
  );
}

export default About;