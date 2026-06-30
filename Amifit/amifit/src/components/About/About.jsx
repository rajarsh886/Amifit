import React from "react";
import aboutImg from "../../assets/images/about-banner.jpg";

const About = () => {
  return (
    <section className="section about active" aria-label="about" id="about" data-section>
      <div className="container">
        <div className="about-banner img-holder" style={{ width: "470px", height: "580px" }}>
          <img src={aboutImg} width="470" height="580" loading="lazy" alt="About banner" className="img-cover" />
          <a href="#" className="btn btn-secondary">
            Meet Instructor
          </a>
        </div>

        <div className="about-content">
          <p className="section-subtitle">25+ Years Of Experience</p>
          <h2 className="h2 section-title">We have expert instructors to help our students.</h2>
          <p className="section-text">
            Lorem Ipsum is simply dummy text in the printing and typesetting industry, used as a standard dummy text
            since the 1500s when an unknown printer created a type specimen book.
          </p>

          <h3 className="about-h3">100+ Courses</h3>
          <p className="section-text">
            Lorem Ipsum is simply dummy text in the printing and typesetting industry, used as a standard dummy text
            since the 1500s when an unknown printer created a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
