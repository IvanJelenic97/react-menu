import arrow from "../images/arrow.png";
import redHouse from "../images/red-house.png";
import simpleHouse from "../images/simple-house.png";
import React from "react";
import "../Zadatak/Zadatak.css";
import logo from "../images/logo.png";
import notifications from "../images/notifications.png";
import Ellipse from "../images/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import male from "../images/male.png";
import female from "../images/female.png";
import RectangleO from "../images/RectangleO.png";
import RectangleW from "../images/RectangleW.png";
import addphoto from "../images/addphoto.png";
import send from "../images/send.png";

const Zadatak = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className="top-container">
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
      <div className="settings2">
        <div className="back-box">
          <img src={arrow} alt="back" className="img-arrow" />
          <p onClick={handleBackClick}>povratak na zadatke</p>
          <h2>Lorem ipsum</h2>
        </div>
        <div className="button-div">
          <button className="button-created">
            <span>Kreiran</span>
          </button>
          <button className="button-wait">
            <span>Srednji prioritet</span>
          </button>
        </div>
      </div>
      <hr className="h" />
      <div className="task-chat">
        <div className="task-basic-info">
          <div className="basic-info">
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
            <span>
              <p>Pogledaj nacrt</p>
            </span>
          </div>
          <div className="basic-info">
            <p id="info">Opis zadatka</p>
            <p>
              Angažirati stolara za izradu polukružnih ruku tako da ih <br />
              dostavi na vrijeme. Ne smiju kasniti.
            </p>
          </div>
          <div>
            <p>Privici</p>
            <div className="house-box">
              <img src={redHouse} alt="redhouse" />
              <img src={simpleHouse} alt="simplehouse" />
            </div>
          </div>
        </div>
        <div className="chat-container">
          <div className="chat-box">
            <p id="info">Komentari</p>
            <div className="male-chat">
              <div className="male-img">
                <img src={male} alt="male" />
              </div>
              <div className="male-message">
                <p id="how">How are you?</p>
                <img src={RectangleW} alt="rectangleW" />
                <p id="am">Josip Horvat - Today, 9.30am</p>
              </div>
            </div>
            <div className="female-chat">
              <div className="female-message">
                <p id="fine">Fine. How about you?</p>
                <img src={RectangleO} alt="rectangleO" />
                <p id="pm">Ivanka Jovanković - Today, 1.30pm</p>
              </div>
              <div className="female-img">
                <img src={female} alt="female" />
              </div>
            </div>
          </div>
          <div className="comment-box">
            <div className="comment-icons">
              <img src={addphoto} alt="addphoto" id="addphoto" />
              <img src={send} alt="send" id="send" />
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Unesite tekst komentara"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zadatak;
