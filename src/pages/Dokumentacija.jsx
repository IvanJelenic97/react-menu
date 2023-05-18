import React from "react";

import logo from "../images/logo.png";
import "../style/Dokumentacija.css";
import notifications from "../images/notifications.png";
import expandIcon from "../images/expand_more.png";
import ProfileDropdown from "./ProfileDropdown";
import Backup from "../images/backup.png";
import Ellipse from "../images/Ellipse.png";

const Dokumentacija = () => {
  const handleBackClick = () => {
    window.history.back();
  };

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
      <div className="settings">
        <h2>Novo gradilište</h2>
        <div className="route">
          <div className="route1">
            <p>
              <span className="number">1</span> Osnovni podaci
            </p>
            <hr className="hr" />
            <p>
              <span className="number">2</span> Voditelji i zaposlenici
            </p>
            <hr className="hr" />
            <p>
              <span className="number">3</span> Dokumentacija
            </p>
            <hr className="hr" />
            <p>
              <span className="number">4</span> Nacrti
            </p>
          </div>
        </div>
        <hr className="h" />
      </div>
      <div className="input-box">
        <div className="inputs2">
          <p>Unesite svu potrebnu dokumentaciju za gradilište</p>
          <div className="dotted-box">
            <div className="backup">
              <div className="backup-img">
                <img src={Backup} alt="Backup" />
              </div>
            </div>
            <p>
              Drag & drop files or <span>Browse</span>
            </p>
            <p id="id">Supported formates: JPEG, PNG, Word, PPT</p>
          </div>
          <button className="upload-button">Upload</button>
        </div>
      </div>

      <div className="buttons-box">
        <div className="buttons">
          <button className="back-step" onClick={handleBackClick}>
            Prethodni korak
          </button>
          <button className="save-step">Spremi i nastavi</button>
          <button className="end-step">Završi</button>
        </div>
      </div>
    </div>
  );
};

export default Dokumentacija;
