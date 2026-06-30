import React from 'react';
import playstore from "../../assets/images/play-store.jpg";
import appstore from "../../assets/images/app-store.jpg";

const AppBanner = () => (
  <section className="section app">
    <div className="container">
      <div className="app-card">
        <p className="section-subtitle">Mobile App Available</p>
        <h2 className="h2 section-title">Download our mobile app.<br />and start coaching anytime.</h2>
        <div className="wrapper flex justify-center gap-4">
          <a href="#" className="app-link" aria-label="Download on Play Store">
            <img 
              src={playstore} 
              alt="Download on Play Store" 
              className="img max-w-full h-auto" 
            />
          </a>
          <a href="#" className="app-link" aria-label="Download on App Store">
            <img 
              src={appstore} 
              alt="Download on App Store" 
              className="img max-w-full h-auto" 
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AppBanner;


