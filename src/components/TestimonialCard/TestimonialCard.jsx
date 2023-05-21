import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard({
  reviewTitle,
  review,
  userName,
  userPosition,
}) {
  return (
    <div className="testimonial-card">
      <h1>{reviewTitle}</h1>
      <h3>{review}</h3>
      <div className="user-review">
        <div className="avatar-icon"></div>
        <div className="user-review-body">
          <div className="user-name">{userName}</div>
          <div className="user-position">{userPosition}</div>
        </div>
      </div>
    </div>
  );
}
