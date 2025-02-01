import React from "react";

function User(props) {
  return (
    <div className="infos">

      <h2>{props.name}</h2>
      <h3>Contact Information</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Address: {props.address}</p>

      <h3>Skills</h3>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3>Work Experience</h3>
      {props.experience.map((job) => (
        <div key={job.title}>
          <p>{job.title} at {job.company}</p>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
