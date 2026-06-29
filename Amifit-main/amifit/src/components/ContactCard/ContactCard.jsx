import React from "react";
import "./ContactCard.css";

const ContactCard = () => {
  return (
    <div className="contact-card">
      <div className="cover-photo">
        <img
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="profile-pic">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQGi9y1WqoAj3g/profile-displayphoto-shrink_100_100/B56ZXMmiPoHoAY-/0/1742894410560?e=1751500800&v=beta&t=pMboGABmhScQTvzyKC-Vsv-b1rIfkXLsZImv3dLC5Ds"
          alt="Woman"
        />
      </div>
      <div className="user-info">
        <h2>Bhanu Prakkash Pandey </h2>
        <p>Amity University Ranchi </p>
      </div>
      <ul className="stats">
        <li>
          <span>⭐</span>
          <div>2k</div>
        </li>
        <li>
          <span>👥</span>
          <div>10k</div>
        </li>
        <li>
          <span>📁</span>
          <div>15</div>
        </li>
      </ul>
      <div className="follow-btn-container">
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default ContactCard;
