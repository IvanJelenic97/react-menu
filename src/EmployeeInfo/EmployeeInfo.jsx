import React, { useState } from "react";
import logo from "../images/logo.png";
import "../EmployeeInfo/EmployeeInfo.css";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import edit from "../images/edit.png";
import archive from "../images/archive.png";
import del from "../images/del.png";
import arrow from "../images/arrow.png";
import person1 from "../images/person1.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HoursChart from "../Charts/HoursChart";
import ChartTable from "../ChartTable/ChartTable";

const EmployeeInfo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGradiliste, setSelectedGradiliste] = useState("");
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
            <h1>Pero Petrović</h1>
            <button className="button-active">
              <span>Aktivno</span>
            </button>
          </div>
          <div className="top-menu-short">
            <p>Općenito</p>
            <p onClick={() => (window.location.href = "/RadniZadaci")}>
              Dokumentacija
            </p>
            <p onClick={() => (window.location.href = "/Nacrti")}>
              Bolovanja i godišnji odmori
            </p>
          </div>
        </div>
        <hr className="h1" />
      </div>
      <div className="info-container">
        <div>
          <div className="employee-img">
            <img src={person1} alt="person1" />
          </div>
          <div className="employee-info">
            <p id="info">Osnovne informacije</p>
            <p>
              Radno mjesto: <span>Naziv</span>
            </p>
            <p>
              Odjel: <span>Ured</span>
            </p>
            <p>
              Email: <span>pero@gmail.com</span>
            </p>
            <p>
              Telefon: <span>0985463696</span>
            </p>
            <p>
              Mobitel: <span>31 000 Osijek</span>
            </p>
            <p>
              Početak rada: <span>1.1.2023.</span>
            </p>
            <p>
              Završetak rada: <span>-</span>
            </p>
          </div>
        </div>
        <div className="stats-container">
          <div className="stats-report">
            <p>Izvještaj rada korisnika</p>
            <span className="img-bg" style={{ marginLeft: "24px" }}>
              <img src={archive} alt="archive" className="img-overlay" />
            </span>
          </div>
          <div className="stats-inputs">
            <div>
              <p>Gradilište</p>
              <select
                name="item"
                className="stats-input"
                placeholder="Odaberite gradilište"
                onChange={(e) => setSelectedGradiliste(e.target.value)}
              >
                <option value="">Odaberite gradilište</option>
                <option value="OBITELJSKA KUĆA 1234">Kuća</option>
                <option value="ISKOP MOSTARSKA">Iskop</option>
                <option value="FASADA">Fasada</option>
                <option value="REŽIJA">Režija</option>
                <option value="NAZIV GRADILIŠTA JE DOSTA DUGAČAK">
                  Paneli
                </option>
                <option value="STAMBENO POSLOVNA ZGRADA">Zgrada</option>
                <option value="PANELI D.O.O.">Krov</option>
              </select>
            </div>
            <div>
              <p>Unesite datume</p>
              <DatePicker
                placeholderText="24.12.2022 - 30.12.2022"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                minDate={new Date(2022, 11, 24)}
                maxDate={new Date(2022, 11, 30)}
                className="stats-input"
              />
            </div>
          </div>
          <HoursChart
            selectedDate={selectedDate}
            selectedGradiliste={selectedGradiliste}
          />
          <ChartTable />
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
