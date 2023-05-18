import React from "react";

import logo from "../images/logo.png";
import "../style/Resursi.css";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import expandIcon from "../images/expand_more.png";
import ProfileDropdown from "./ProfileDropdown";
import CheckboxGrid from "../checkbox/CheckboxGrid";

const Resursi = () => {
  return (
    <div className="top-bar">
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
      <div className="settings">
        <h2>Postavke</h2>
        <div className="links">
          <div className="links1">
            <p id="rights">Grupe prava</p>
            <p>Odjeli</p>
            <p>Pracenje resursa</p>
          </div>
        </div>
        <div className="input-container">
          <h3>Odaberite korisnika:</h3>
          <div className="input-wrapper">
            <input type="text" placeholder="Admin" />
            <img src={expandIcon} alt="Expand" />
          </div>
        </div>
        <div className="input-container">
          <h3>Odaberite modul:</h3>
          <div className="input-wrapper">
            <input type="text" placeholder="Gradilišta" />
            <img src={expandIcon} alt="Expand" />
          </div>
        </div>

        <button className="submit-button">Primjeni</button>
        <div className="checkbox-grid-container">
          <CheckboxGrid />
          <div className="grid-bttn">
            <button className="save-button">Spremi izmjene</button>
            <button className="quit-button">Odustani</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resursi;
