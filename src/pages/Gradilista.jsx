import React from "react";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../images/logo.png";
import "../style/Gradilista.css";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import Search from "../images/search.png";
import gridView from "../images/grid_view.png";
import tableChart from "../images/table_chart.png";
import location from "../images/location.png";
import calendar from "../images/calendar.png";
import school from "../images/school.png";
import building from "../images/building.png";
import houseSiding from "../images/house_siding.png";
import CustomTable from "./CustomTable";

const Gradilista = () => {
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

  return (
    <div className="head">
      <div className="main">
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
        <div className="content">
          {isGridView ? (
            <div className="grid-container">
              <div
                className="grid-item grid-item-image my-grid-item"
                onClick={() => (window.location.href = "/naziv-gradilista")}
              >
                <img src={building} alt="building" className="ellipse2" />
                <div className="button-container">
                  <button className="active-button">
                    <span>Aktivno</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>HEP - sanacija uljne jame TS u Branjinom Vrhu</p>
                </div>
                <div className="text-icon">
                  <div className="text-container1">
                    <p>
                      <img src={calendar} alt="Event Available" />
                      Predviđeni završetak: 2.11.2023.
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={location} alt="Location On" />
                    Adresa: Trg kralja Tomislava,31550, Valpovo
                  </p>
                </div>
              </div>
              <div
                className="grid-item grid-item-image my-grid-item"
                onClick={() => (window.location.href = "/NazivGradilista2")}
              >
                <div className="house">
                  <img src={houseSiding} alt="houseSiding" />
                </div>
                <div className="button-container">
                  <button className="button1-active-button">
                    <span>U pripremi</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>Obiteljska kuća</p>
                </div>
                <div className="text-icon1">
                  <div className="text-container1">
                    <p>
                      <img src={calendar} alt="Event Available" />
                      Predviđeni završetak: 2.11.2023.
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={location} alt="Location On" />
                    Adresa: Trg kralja Tomislava,31550, Valpovo
                  </p>
                </div>
              </div>

              <div className="grid-item grid-item-image my-grid-item">
                <div className="house">
                  <img src={houseSiding} alt="houseSiding" />
                </div>
                <div className="button-container">
                  <button className="active-button">
                    <span>Aktivno</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>
                    HEP - sanacija uljne jame TS u Branjinom s dugim nazi...
                  </p>
                </div>
                <div className="text-icon">
                  <div className="text-container1">
                    <p>
                      <img src={calendar} alt="Event Available" />
                      Predviđeni završetak: 2.11.2023.
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={location} alt="Location On" />
                    Adresa: Trg kralja Tomislava,31550, Valpovo
                  </p>
                </div>
              </div>
              <div className="grid-item grid-item-image my-grid-item">
                <div className="house">
                  <img src={houseSiding} alt="houseSiding" />
                </div>
                <div className="button-container">
                  <button className="button-active-button">
                    <span>Arhiva</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>Sanacija škole</p>
                </div>
                <div className="text-icon1">
                  <div className="text-container1">
                    <p>
                      <img src={calendar} alt="Event Available" />
                      Predviđeni završetak: 2.11.2023.
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={location} alt="Location On" />
                    Adresa: Trg kralja Tomislava,31550, Valpovo
                  </p>
                </div>
              </div>
              <div className="grid-item grid-item-image my-grid-item">
                <img src={school} alt="school" className="ellipse2" />
                <div className="button-container">
                  <button className="button-active-button">
                    <span>Arhiva</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>Sanacija škole</p>
                </div>
                <div className="text-icon">
                  <div className="text-container1">
                    <p>
                      <img src={calendar} alt="Event Available" />
                      Predviđeni završetak: 2.11.2023.
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={location} alt="Location On" />
                    Adresa: Trg kralja Tomislava,31550, Valpovo
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <CustomTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gradilista;
