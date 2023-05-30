import { Link } from "react-router-dom";
import "../RadniSati/RadniSati.css";
import edit from "../images/edit.png";
import archive from "../images/archive.png";
import del from "../images/del.png";
import arrow from "../images/arrow.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import logo from "../images/logo.png";
import Search from "../images/search.png";
import rightArrow from "../images/right-arrow.png";
import leftArrow from "../images/left-arrow.png";
import calendarMonth from "../images/calendar_month.png";
import HoursTable from "../HoursTable/HoursTable";

const RadniSati = () => {
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
              <Link to="/gradilista">
                <img src={arrow} alt="back" className="img-arrow" />
                <p>povratak na sva gradilista</p>
              </Link>
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
            <p onClick={() => (window.location.href = "/naziv-gradilista")}>
              Općenito
            </p>
            <p onClick={() => (window.location.href = "/RadniZadaci")}>
              Radni zadaci
            </p>
            <p onClick={() => (window.location.href = "/Nacrti")}>Nacrti</p>
            <p onClick={() => (window.location.href = "/Dokumenti")}>
              Dokumenti
            </p>
            <p
              className="hour"
              onClick={() => (window.location.href = "/RadniSati")}
            >
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
            <h3>Radni sati</h3>
            <button
              className="button-task1"
              onClick={() => (window.location.href = "/novo-gradiliste")}
            >
              Uredi
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
      </div>
      <div className="date-container">
        <div className="date-box">
          <img id="calendar" src={calendarMonth} alt="calendarMonth" />
          <p>Prosinac 2022</p>
        </div>
        <div>
          <button
            className="button-task2"
            onClick={() => (window.location.href = "/novo-gradiliste")}
          >
            Današnji dan
          </button>
          <img id="arrow" src={leftArrow} alt="leftArrow" />
          <img id="arrow" src={rightArrow} alt="rightArrow" />
        </div>
      </div>
      <HoursTable />
    </div>
  );
};

export default RadniSati;
