import React from "react";
import "../style/footer.css";
 
function Footer () {
    return (
        <footer className="footer">
            <h1>AI Resume Analyzer</h1>
            <div className="footer-content">
                 <div className="footer-section">
                    <h3>About Us</h3>
                    <p>AI Resume Analyzer is a cutting-edge platform designed to streamline the hiring process using artificial intelligence.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: support@airresumeanalyzercom</p>
                    <p>Phone: +9779840123654</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 AI resume Analyzer. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;