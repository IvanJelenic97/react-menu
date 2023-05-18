import React from "react";
import logo from "../images/logo.png";
import edit from "../images/edit.png";
import archive from "../images/archive.png";
import del from "../images/del.png";
import arrow from "../images/arrow.png";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import Search from "../images/search.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import "../Dokumenti/Dokumenti.css";
import DocsTable from "../DocsTable/DocsTable";

const Dokumenti = () => {
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
            <p onClick={() => (window.location.href = "/RadniSati")}>
              Radni sati
            </p>
            <p>Materijalni troškovi</p>
            <p>Troškovi koperanata</p>
            <p>Prihodi</p>
          </div>
        </div>
        <hr className="h1" />
      </div>
      <div className="table-box">
        <div className="docs">
          <div className="my-docs">
            <h3>Moji dokumenti</h3>
            <button
              className="button-task"
              onClick={() => (window.location.href = "/novo-gradiliste")}
            >
              Novi dokument
            </button>
          </div>
          <div className="search-docs">
            <div className="inPUT">
              <input className="table-input" placeholder="Pretraga"></input>
              <img src={Search} alt="search" className="table-search" />
              <button className="table-search-button">Pretraži</button>
            </div>
          </div>
        </div>
        <DocsTable />
      </div>
    </div>
  );
};

export default Dokumenti;
