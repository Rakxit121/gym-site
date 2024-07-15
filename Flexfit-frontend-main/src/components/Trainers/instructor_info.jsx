// InstructorInfo.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function InstructorInfo() {
  const location = useLocation();
  const { instructor, title, date } = location.state || {};

  if (!instructor || !title || !date) {
    return <div>Invalid instructor data.</div>;
  }

  return (
    <div className="instructor-info">
      <img src={instructor.image} alt={instructor.name} className="instructor-image" />
      <h3>{instructor.name}</h3>
      <p>{instructor.title}</p>
      <hr />
      <h4>Experience:</h4>
      <ul>
        {instructor.experience.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
      <div>
        <h4>Class Details</h4>
        <p><strong>Class:</strong> {title}</p>
        <p><strong>Date:</strong> {date}</p>
      </div>
    </div>
  );
}

export default InstructorInfo;
