import React from "react";

function User(props) {
  return (
    <div className="infos">

      <h2>{props.name}</h2>
      <h3>Contact Information</h3>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Addres: {props.address}</p>

    </div>
  );
}

export default User;
