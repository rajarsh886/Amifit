import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import service1 from "../../assets/images/service-1.svg";
import service2 from "../../assets/images/service-2.svg";
import service3 from "../../assets/images/service-3.svg";

const services = [
  {
    title: "BMR Calculator",
    text: "Estimates the number of calories your body needs at rest to maintain basic functions.",
    img: service1,
    alt: "BMR Calculator",
    route: "/BMRCalculatorPage",
  },
  {
    title: "BMI Calculator",
    text: "Determines if a person is underweight, normal, overweight, or obese based on height and weight.",
    img: service2,
    alt: "BMI Calculator",
    route: "/BMICalculatorPage",
    active: true,
  },
  {
    title: "Calorie Calculator",
    text: "Recommends daily calorie intake based on fitness goals (gain, lose, maintain weight).",
    img: service3,
    alt: "Calorie Calculator",
    route: "/CalorieCalculatorPage",
  },
];

export default function Services() {
  return (
    <section
      className="section service active"
      aria-label="service"
      data-section
    >
      <div className="container">
        <ul className="grid-list">
          {services.map((service, index) => (
            <li key={index}>
              <div
                className={`service-card ${service.active ? "active" : ""}`}
              >
                <div className="card-icon">
                  <img
                    src={service.img}
                    width="60"
                    height="60"
                    loading="lazy"
                    alt={service.alt}
                  />
                </div>
                <h3 className="h3">
                  <Link to={service.route} className="card-title">
                    {service.title}
                  </Link>
                </h3>
                <p className="card-text">{service.text}</p>
                <Link to={service.route} className="btn btn-secondary">
                  <IoArrowForward />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
