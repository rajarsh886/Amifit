import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const Counterhero = () => {
  const openPDF = () => {
    window.open('/docs/exercise-guide.pdf', '_blank'); 
  };

  return (
    <section className="hero bg-[url('./assets/images/hero-banner.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="container text-center">
        <p className="hero-subtitle">Smart Fitness AI</p>
        <h1 className="h1 hero-title">AI-Powered Exercise Counter</h1>
        <p ctlassName="hero-text section-text">
          05+ intelligent workout trackers that monitor form, count reps, and guide your fitness journey.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          <button
            className="btn btn-primary"
            onClick={() => alert("Start Exercise Function Coming Soon!")}
          >
            Start Now <IoArrowForward style={{ display: "inline", marginLeft: "8px" }} />
          </button>

          <button
            className="btn btn-secondary"
            onClick={openPDF}
          >
            Read Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counterhero;
