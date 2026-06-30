import React from "react";
import axios from "axios";
import service1 from "../../assets/images/service-1.svg";
import service2 from "../../assets/images/service-2.svg";
import service3 from "../../assets/images/service-3.svg";
import { IoArrowForward } from "react-icons/io5";

const services = [
  {
    title: "Push ups",
    text: "Perform and track your push-up reps in real-time using AI.",
    img: service1,
    alt: "Push ups",
  },
  {
    title: "Bicep Curles",
    text: "Track your bicep curl movement and form accurately.",
    img: service2,
    alt: "Bicep Curles",
  },
  {
    title: "Lunges",
    text: "Monitor and count your lunges with posture assistance.",
    img: service3,
    alt: "Lunges",
  },
  {
    title: "Situps",
    text: "Automated sit-up counting for efficient core training.",
    img: service2,
    alt: "Situps",
  },
  {
    title: "Squart",
    text: "AI-powered squat detection and repetition tracking.",
    img: service3,
    alt: "Squart",
  },
];

export default function Exercisecountercards() {
  const handleStartExercise = async (exercise) => {
    try {
      const response = await axios.post("http://localhost:5000/start-exercise", {
        exercise,
      });
      alert(`${exercise} counter started!`);
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to start the exercise counter.");
    }
  };

  return (
    
    <section
      className="section service active"
      aria-label="service"
      data-section
    >
        <div className="title-wrapper">
          <p className="section-subtitle">05+ Exercise Counter Available</p>
          <h2 className="h2 section-title">Focus on technique not count</h2>
        </div>
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
                  <a href="#" className="card-title">
                    {service.title}
                  </a>
                </h3>
                <p className="card-text">{service.text}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleStartExercise(service.title)}
                >
                  <IoArrowForward />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
