import React from "react";
import logo from "../images/logo.png";
import "../naziv-gradilista/NazivGradilista.css";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import building from "../images/building1.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import edit from "../images/edit.png";
import archive from "../images/archive.png";
import del from "../images/del.png";
import arrow from "../images/arrow.png";

const NazivGradilista = () => {
  const letters = [..."abcdefghijklmnoprstuvz"];
  const employees = Array.from(
    { length: 25 },
    () =>
      letters[Math.floor(Math.random() * letters.length)] +
      letters[Math.floor(Math.random() * letters.length)]
  );

  const rows = [];
  for (let i = 0; i < employees.length; i += 7) {
    rows.push(employees.slice(i, i + 7));
  }
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
      <div className="component">
        <div className="header-container">
          <div className="top-header">
            <div className="back-part">
              <img src={arrow} alt="back" className="img-arrow" />
              <p onClick={handleBackClick}>povratak na sva gradilista</p>
            </div>
            <div className="img-part" style={{ paddingLeft: "24px" }}>
              <span className="img-bg" style={{ marginLeft: "24px" }}>
                <img src={edit} alt="edit" className="img-overlay" />
              </span>

              <span className="img-bg" style={{ marginLeft: "24px" }}>
                {" "}
                <img src={archive} alt="archive" className="img-overlay" />
              </span>

              <span className="img-bg" style={{ marginLeft: "24px" }}>
                <img src={del} alt="del" className="img-overlay" />
              </span>
            </div>
          </div>
          <div className="bottom-header">
            <h1>Naziv gradilišta</h1>
            <button className="button-active">
              <span>Aktivno</span>
            </button>
          </div>
          <div className="top-menu">
            <p>Općenito</p>
            <p onClick={() => (window.location.href = "/RadniZadaci")}>
              Radni zadaci
            </p>
            <p onClick={() => (window.location.href = "/Nacrti")}>Nacrti</p>
            <p onClick={() => (window.location.href = "/Dokumenti")}>
              Dokumenti
            </p>
            <p>Radni sati</p>
            <p>Materijalni troškovi</p>
            <p>Troškovi koperanata</p>
            <p>Prihodi</p>
          </div>
        </div>
        <hr className="h1" />
        <div className="content-container">
          <div className="first-box">
            <div className="img-place">
              <div className="img-place-img">
                <img src={building} alt="building" />
              </div>
              <div className="img-place-txt">
                <p id="info">Osnovne informacije</p>
                <p>
                  Broj/Oznaka: <span>1 radovi</span>
                </p>
                <p>
                  Početak projekta: <span>05.12.2022.</span>
                </p>
                <p>
                  Predviđeni završetak: <span>13.01.2024.</span>
                </p>
                <p>
                  Adresa: <span>Ulica 21</span>
                </p>
                <p>
                  Poštanski broj: <span>10 000 Zagreb</span>
                </p>
                <p>
                  Država: <span>Hrvatska</span>
                </p>
                <p>
                  web stranica: <span>-</span>
                </p>
              </div>
            </div>
          </div>
          <div className="second-box">
            <div className="circle-place">
              <div className="partners">
                <p id="info">Sudionici u gradnji</p>
                <p>
                  Investitori: <span>Ivan Horvat</span>
                </p>
                <p>
                  Voditelj gradilišta: <span>Marko Macić</span>
                </p>
              </div>
              <div className="employees">
                <p id="info1">
                  Zaposlenici
                  <span className="img-edit1">
                    <img src={edit} alt="edit" className="img-edit" />
                  </span>
                </p>
                {rows.map((row, index) => (
                  <div className="row" key={index}>
                    {row.map((employee, index) => (
                      <div className="circle" key={index}>
                        {employee}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="des">
          <p id="info1">Opis projekta</p>
          <p>Obiteljska stambena zgrada</p>
        </div>
      </div>
    </div>
  );
};

export default NazivGradilista;
