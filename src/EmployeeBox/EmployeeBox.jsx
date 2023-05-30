import React from "react";
import "../EmployeeBox/EmployeeBox.css";
import employee1 from "../images/employee1.png";
import employee2 from "../images/employee2.png";
import info from "../images/info.png";
import call from "../images/call.png";
import Email from "../images/alternate_email.png";

const EmployeeBox = ({ name, position, department, phone, email, image }) => {
  return (
    <div className="employee-box employee-box1">
      <div className="name-box">
        <div className="box-img">
          <img src={employee1} alt="employee"></img>
        </div>
        <div className="box-name">
          <p id="em-name">{name}</p>
          <h5>{position}</h5>
        </div>
      </div>
      <div>
        <div className="info-box">
          <div className="box-info">
            <img src={info} alt="info"></img>
            <p>{department}</p>
          </div>
          <div className="box-info">
            <img src={call} alt="call"></img>
            <p>{phone}</p>
          </div>
          <div className="box-info">
            <img src={Email} alt="email"></img>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBox;
