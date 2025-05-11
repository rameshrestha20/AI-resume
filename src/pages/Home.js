import React from "react";
import { FaBrain, FaClock, FaUserCog, FaUpload, FaChartLine, FaHandshake } from 'react-icons/fa';
import Footer from "../components/footer";
import "../style/home_page.css";
 
  
function Home() {
  return (
    <div className="home-page">
        <section className="hero-banner">
        <div className="hero-content">
             <h1 className="hero-title">AI POWERED RESUME ANALYZER</h1>
          <p className="hero-subtitle">Get Hired Faster with Smart Resume Analysis!</p>
 
         </div>
      </section>
      <div/>
      
      <section className="features-section">
        <h2 className="feature-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaBrain />
            </div>
            <h3>AI-Powered Analysis</h3>
            <p>Our advanced AI analyzes your resume and provides actionable feedback to improve your chances of getting hired.</p>
            <a href="#" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaClock />
            </div>
            <h3>Instant Feedback</h3>
            <p>Get real-time feedback on your resume's strengths and weaknesses.</p>
            <a href="#" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaUserCog />
            </div>
            <h3>Tailored Suggestions</h3>
            <p>Receive personalized suggestions to optimize your resume for specific job roles.</p>
            <a href="#" className="feature-link">Learn More <i className="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="subtitle">The Smart Process</h2>
         <div className="steps-grid">
           <div className="step-card">
            <span className="step-number">1</span>
            <h3>Upload Your Resume</h3>
            <p>Upload your resume in PDF or DOC format.</p>
            <div className="step-icon">
              <FaUpload />
            </div>
          </div>
          <div className="step-card">
            <span className="step-number">2</span>
            <h3>AI Analysis</h3>
            <p>Our AI analyzes your resume and provides detailed feedback.</p>
            <div className="step-icon">
              <FaChartLine />
            </div>
          </div>
          <div className="step-card">
            <span className="step-number">3</span>
            <h3>Get Hired</h3>
            <p>Improve your resume and land your dream job!</p>
            <div className="step-icon">
              <FaHandshake />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Review</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"This tool helped me improve my resume and land multiple interviews. Highly recommended!"</p>
              <h4>- John Doe</h4>
            </div>
            <div className="testimonial-avatar">
             </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"The AI feedback was spot-on. My resume is now much stronger thanks to this platform."</p>
              <h4>- Jane Smith</h4>
            </div>
            <div className="testimonial-avatar">
             </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"I got hired within a week of using this tool. It's a game-changer!"</p>
              <h4>- Alex Johnson</h4>
            </div>
            <div className="testimonial-avatar">
             </div>
          </div>
        </div>
      </section>

       <footer className="footer">
        <Footer>{Footer}</Footer>
       </footer>
    </div>
  );
}

export default Home;