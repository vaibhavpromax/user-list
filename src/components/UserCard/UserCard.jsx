import React from "react";
import "./UserCard.css";
const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <span className="name">{props.name}</span>
        <span className="location">📍{props.location}</span>
      </div>
      <div className="user-image">
        <img src={props.image} alt="user" />
      </div>
    </div>
  );
};

export default UserCard;
