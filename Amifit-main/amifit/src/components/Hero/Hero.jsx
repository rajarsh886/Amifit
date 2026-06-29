import React from "react";
import amihero from "../../assets/images/amihero.jpg";
import {
  IoLogoFacebook,
  IoLogoSkype,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

const Hero = () => {
  return (
    <section
      className="section hero active min-h-[90vh] flex items-center bg-cover bg-center"
      aria-label="hero"
      id="home"
      data-section
      style={{
        backgroundImage: `url(${amihero})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="container z-10 text-left text-white max-w-3xl">
        <p className="hero-subtitle text-[var(--blue-green-color-wheel)] font-bold uppercase tracking-widest text-sm">
          Fitness & Nutrition
        </p>

        <h1 className="h1 hero-title mt-4 mb-6 text-3xl md:text-5xl font-serif text-[var(--black-chocolate)]">
          This life style for your fitness, not only diet.
        </h1>

        <p className="hero-text font-medium text-[var(--black-chocolate)] text-sm md:text-base">
          It has survived not only five centuries but also
        </p>

        <a href="#" className="btn btn-secondary mt-6 text-sm md:text-base">
          Start Course
        </a>

        <div className="social-wrapper flex flex-col items-start mt-10 gap-2">
          <p className="social-title font-medium text-[var(--black-chocolate)] text-sm">
            Connect with us:
          </p>
          <ul className="social-list flex gap-4 mt-2">
            {[
              <IoLogoFacebook />,
              <IoLogoSkype />,
              <IoLogoTwitter />,
              <IoLogoLinkedin />,
            ].map((Icon, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="social-link p-2.5 rounded-full border border-[var(--blue-green-color-wheel_10)] hover:bg-[var(--blue-green-color-wheel)] hover:text-white transition"
                >
                  {Icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
