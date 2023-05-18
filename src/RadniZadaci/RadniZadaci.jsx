import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import edit from "../images/edit.png";
import archive from "../images/archive.png";
import del from "../images/del.png";
import Search from "../images/search.png";
import gridView from "../images/grid_view.png";
import tableChart from "../images/table_chart.png";
import locationOn from "../images/locationOn.png";
import "../RadniZadaci/RadniZadaci.css";
import person from "../images/person.png";
import event from "../images/event.png";
import arrow from "../images/arrow.png";

const RadniZadaci = () => {
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
    <div className="container-main">
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
          <div className="top-menu1">
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
            <p onClick={() => (window.location.href = "/RadniSati")}>
              Radni sati
            </p>
            <p>Materijalni troškovi</p>
            <p>Troškovi koperanata</p>
            <p>Prihodi</p>
          </div>
        </div>
      </div>
      <hr className="h" />
      <div className="work-container">
        <div className="work-tasks-container">
          <div className="container">
            <button
              className="button-1"
              onClick={() => (window.location.href = "/NoviZadatak")}
            >
              Novi zadatak
            </button>
          </div>
          <div className="container">
            <select name="item" id="item" placeholder="Status">
              <option value="status">Sort</option>
            </select>
            <div className="search-container">
              <div className="search-input-container">
                <input
                  className="search-input-1"
                  placeholder="Pretraga"
                ></input>
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
        <div>
          <div className="tasks-priority">
            <button className="priority">
              <span>Najviši prioritet</span>
            </button>
          </div>
        </div>
        <div className="main-container">
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="created-button">
                <span>Kreiran</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                Supervizor: <span>Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                Rok zadataka: <span>: 14.10.2022</span>
              </p>
            </div>
          </div>

          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="wait-button">
                <span>Na čekanju</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                Supervizor: <span>Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                Rok zadataka: <span>: 14.10.2022</span>
              </p>
            </div>
          </div>
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="given-button">
                <span>Dodjeljen</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                Supervizor: <span>Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                Rok zadataka: <span>: 14.10.2022</span>
              </p>
            </div>
          </div>
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="created-button">
                <span>Kreiran</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                Supervizor: <span>Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                Rok zadataka: <span>: 14.10.2022</span>
              </p>
            </div>
          </div>
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="wait-button">
                <span>Na čekanju</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                Supervizor: <span>Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                Rok zadataka: <span>: 14.10.2022</span>
              </p>
            </div>
          </div>
          <button className="high-priority">
            <span>Visoki prioritet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadniZadaci;
