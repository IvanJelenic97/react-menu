import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import icon from "../images/expand_less.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Resursi",
      icon: require("../images/construction.png"),
    },
    {
      path: "/vozila",
      name: "Vozila",
      icon: require("../images/directions_car.png"),
    },
    {
      path: "/strojevi",
      name: "Strojevi",
      icon: require("../images/Vector.png"),
    },
    {
      path: "/kooperanti",
      name: "Kooperanti",
      icon: require("../images/engineering.png"),
    },
    {
      path: "/gradilista",
      name: "Gradilista",
      icon: require("../images/house_siding.png"),
      group: "sites",
    },
    {
      path: "/financije",
      name: "Financije",
      icon: require("../images/euro.png"),
    },
    {
      path: "/tvrtka",
      name: "Tvrtka",
      icon: require("../images/apartment.png"),
    },
    {
      path: "/Zaposlenici",
      name: "Zaposlenici",
      icon: require("../images/groups.png"),
    },
    {
      path: "/izvjestaji",
      name: "Izvjestaji",
      icon: require("../images/description.png"),
    },
    {
      path: "/mojaFirma",
      name: "Moja Firma",
      icon: require("../images/description.png"),
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          width: isOpen ? "150px" : "60px",
          position: "sticky",
          top: "0",
        }}
        className={`sidebar`}
      >
        <div className="top_section">
          <p style={{ display: isOpen ? "block" : "none" }} className="close">
            Zatvori menu
          </p>
          <div
            className="bars"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "12px",
            }}
          >
            <img src={icon} alt="expand_less icon" onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`link ${item.group}`}
            activelassame="active"
          >
            <div
              className="icon"
              style={{
                marginTop:
                  item.name === "Gradilista"
                    ? "45px"
                    : item.name === "Financije"
                    ? "45px"
                    : item.name === "Tvrtka"
                    ? "45px"
                    : item.name === "Izvjestaji"
                    ? "45px"
                    : 0,
              }}
            >
              <img src={item.icon} alt={item.name} />
            </div>
            <div
              style={{
                display: isOpen ? "block" : "none",
                marginTop:
                  item.group === "sites"
                    ? "45px"
                    : item.name === "Financije"
                    ? "45px"
                    : item.name === "Tvrtka"
                    ? "45px"
                    : item.name === "Izvjestaji"
                    ? "45px"
                    : 0,
              }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
