import React, { useState } from "react";
import expandIcon from "../images/expand_more.png";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile" onClick={handleDropdownClick}>
        <div className="name">
          <p>
            Ivan Horvat{" "}
            <img src={expandIcon} alt="Expand" className="expand-icon" />
          </p>
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Moj profil</li>
          <li>Postavke</li>
          <li>Info</li>
          <li>Odjava</li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
