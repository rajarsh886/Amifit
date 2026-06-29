import React from "react";

import course1 from "../../assets/images/courses-1.jpg";
import course2 from "../../assets/images/courses-2.jpg";
import course3 from "../../assets/images/courses-3.jpg";
import course4 from "../../assets/images/courses-4.jpg";
import course5 from "../../assets/images/courses-5.jpg";
import course6 from "../../assets/images/courses-6.jpg";

const courses = [
  {
    title: "Children Nutrition and Cooking",
    price: "$98",
    author: "Ryan Patterson",
    time: "08 hr 20 mins",
    lectures: "28 Lectures",
    img: course1,
    alt: "Children Nutrition and Cooking",
  },
  {
    title: "Introduction to Food and Health.",
    price: "$72",
    author: "Arlene Daniels",
    time: "09 hr 25 mins",
    lectures: "16 Lectures",
    img: course2,
    alt: "Introduction to Food and Health.",
  },
  {
    title: "Nutrition and Lifestyle in Pregnancy",
    price: "$68",
    author: "Selina Benton",
    time: "03 hr 38 mins",
    lectures: "18 Lectures",
    img: course3,
    alt: "Nutrition and Lifestyle in Pregnancy",
  },
  {
    title: "Expertise on Fitness, Nutrition and Health",
    price: "$98",
    author: "Ryan Patterson",
    time: "02 hr 16 mins",
    lectures: "14 Lectures",
    img: course4,
    alt: "Expertise on Fitness, Nutrition and Health",
  },
  {
    title: "Hacking exercise for health new science of fitness",
    price: "$72",
    author: "Arlene Daniels",
    time: "06 hr 12 mins",
    lectures: "35 Lectures",
    img: course5,
    alt: "Hacking exercise for health new science of fitness",
  },
  {
    title: "Designing Your Personal Weight Loss Plan",
    price: "$68",
    author: "Selina Benton",
    time: "09 hr 34 mins",
    lectures: "28 Lectures",
    img: course6,
    alt: "Designing Your Personal Weight Loss Plan",
  },
];

const Course = () => {
  return (
    <section className="section course active" aria-label="course" id="course" data-section>
      <div className="container">
        <div className="title-wrapper">
          <p className="section-subtitle">100+ Courses Available</p>
          <h2 className="h2 section-title">Fitness & Nutrition Courses</h2>
        </div>

        <ul className="grid-list">
          {courses.map((course, index) => (
            <li key={index}>
              <div className="course-card">
                <figure className="card-banner img-holder" style={{ width: "350px", height: "300px" }}>
                  <img
                    src={course.img}
                    width="350"
                    height="300"
                    loading="lazy"
                    alt={course.alt}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <data className="card-price" value={course.price.replace("$", "")}>
                    {course.price}
                  </data>

                  <p className="card-author">
                    <a href="#" className="card-link">
                      By: <span className="span">{course.author}</span>
                    </a>
                  </p>

                  <h3 className="h3">
                    <a href="#" className="card-title">
                      {course.title}
                    </a>
                  </h3>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <time>{course.time}</time>
                    </li>
                    <li className="card-meta-item">
                      <p className="card-meta-text">{course.lectures}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Course;
