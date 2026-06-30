import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top section">
      <div className="container">
        <div className="footer-list">
          <p className="footer-list-title">Subscribe to Our Newsletter</p>
          <p className="footer-list-text">Stay updated with our latest courses and offers.</p>
          <form className="footer-form">
            <label htmlFor="email_address" className="sr-only">Email Address</label>
            <input
              type="email"
              name="email_address"
              id="email_address"
              placeholder="Enter your email"
              required
              className="email-field"
            />
            <button type="submit" className="btn btn-secondary">Subscribe Now</button>
          </form>
        </div>
        <ul className="footer-list">
          <li><p className="footer-list-title">All Courses</p></li>
          {['Daily Exercise', 'Find Your Balance', 'Personal Program', 'Natural Process', 'Immune System', 'Gives You Energy'].map((link, i) => (
            <li key={i}><a href="#" className="footer-link">{link}</a></li>
          ))}
        </ul>
        <ul className="footer-list">
          <li><p className="footer-list-title">Help Links</p></li>
          {['Privacy Policy', 'Discussion', 'Terms & Conditions', 'Customer Support', 'Course FAQ’s', 'Online Classes'].map((link, i) => (
            <li key={i}><a href="#" className="footer-link">{link}</a></li>
          ))}
        </ul>
        <ul className="footer-list">
          <li><p className="footer-list-title">Opening Hours</p></li>
          <li><a href="#" className="footer-link">Mon-Fri: 9 AM – 6 PM</a></li>
          <li><a href="#" className="footer-link">Saturday: 9 AM – 4 PM</a></li>
          <li><a href="#" className="footer-link">Sunday: Closed</a></li>
          <li><p className="footer-list-title address-title">Location</p></li>
          <li><address className="address">176 W street name, New<br />India</address></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          &copy; 2025 AmiFit<ion-icon name="heart"></ion-icon> by <a href="#" className="copyright-link">Bhanu Prakash Pandey</a>
        </p>
        <ul className="footer-bottom-list">
          {['Terms of Service', 'Privacy Policy', 'Sitemap', 'Security'].map((item, idx) => (
            <li key={idx} className="footer-bottom-item">
              <a href="#" className="footer-bottom-link">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
