import React from "react";
import { useState } from "react";
import EmployeeBox from "../EmployeeBox/EmployeeBox";
import logo from "../images/logo.png";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import Search from "../images/search.png";
import gridView from "../images/grid_view.png";
import tableChart from "../images/table_chart.png";
import employee1 from "../images/employee1.png";
import employee2 from "../images/employee2.png";
import info from "../images/info.png";
import email from "../images/email.png";
import call from "../images/call.png";
import employee from "../images/employee.png";
import CustomTable from "./CustomTable";
import "../style/Zaposlenici.css";

const Zaposlenici = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [isTableView, setIsTableView] = useState(false);

  const handleGridViewClick = () => {
    setIsGridView(true);
    setIsTableView(false);
  };

  const handleTableViewClick = () => {
    setIsTableView(true);
    setIsGridView(false);
  };
  const employees = [
    {
      name: "Miljenko grmić",
      position: "Pozicija 1",
      department: "Odjel 1",
      phone: "2123456",
      email: "miljenko.grmic@gmail.com",
    },
    {
      name: "Mario Macić",
      position: "Pozicija 2",
      department: "Odjel 2",
      phone: "2123456",
      email: "mario.macic@gmail.com",
    },
    {
      name: "Pero Maričić",
      position: "Pozicija 3",
      department: "Odjel 3",
      phone: "2123456",
      email: "pero.maricic@gmail.com",
    },
    {
      name: "Katica Maričić",
      position: "Pozicija 4",
      department: "Odjel 4",
      phone: "2123456",
      email: "katica.maricic@gmail.com",
    },
  ];

  const repeatedEmployees = Array.from(
    { length: 16 },
    (_, index) => employees[index % employees.length]
  );
  return (
    <div>
      <nav className="top-nav1">
        <div className="logo1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="icon1">
          <img src={notifications} alt="" />
          <img src={Ellipse} alt="" className="ellipse" />
          <ProfileDropdown />
        </div>
      </nav>
      <div className="header">
        <div className="container">
          <h1>Moja gradilišta</h1>
          <button
            className="button"
            onClick={() => (window.location.href = "/novo-gradiliste")}
          >
            Novo gradilište
          </button>
        </div>
        <div className="container">
          <select name="item" id="item" placeholder="Status">
            <option value="status">Status</option>
          </select>
          <div className="search-container">
            <div className="search-input-container">
              <input className="search-input" placeholder="Pretraga"></input>
              <img src={Search} alt="" className="search-icon" />
              <button className="search-button">Pretraži</button>
            </div>
          </div>
          <div className="view-type-container">
            <button
              onClick={handleGridViewClick}
              className={`grid-view ${
                isGridView ? "active-view custom-grid-view" : ""
              }`}
            >
              {isGridView ? (
                <img src={gridView} alt="" />
              ) : (
                <img src={gridView} alt="" />
              )}
            </button>
            <button
              onClick={handleTableViewClick}
              className={`table-view ${
                isTableView ? "active-view custom-table-view" : ""
              }`}
            >
              {isTableView ? (
                <img src={tableChart} alt="" />
              ) : (
                <img src={tableChart} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="grid-container">
        {repeatedEmployees.map((employee, index) => (
          <EmployeeBox
            key={index}
            name={employee.name}
            position={employee.position}
            department={employee.department}
            phone={employee.phone}
            email={employee.email}
            image={employee.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Zaposlenici;
