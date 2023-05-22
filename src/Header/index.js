import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import {
  MdVideoCall,
  MdOutlineApps,
  MdNotifications,
  MdCast,
} from "react-icons/md";
import "./index.css";

const Header = () => {
  const [inputSearch, search] = useState("");

  return (
    <div className="header-container">
      <div className="header-left-part">
        <GiHamburgerMenu className="mr-3" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube"
          className="header-youtube-image"
        />
      </div>
      <div className="header-middle-part">
        <input
          type="text"
          className="input"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => search(e.target.value)}
        />
        <BiSearch className=" mr-4 icons search" />
      </div>
      <div className="header-right-part">
        <MdVideoCall className="mr-3 icons" />
        <MdOutlineApps className="mr-3 icons" />
        <MdNotifications className="mr-3 icons" />
        <img
          src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684313904/photo_-_Copy_c7lkcw.jpg"
          alt="profile"
          className="profile"
        />
      </div>

      <div className="mobile-part">
        <MdCast className="mr-3 icons" />
        <MdNotifications className="mr-3 icons" />
        <BiSearch className="mr-3 icons" />

        <img
          src="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684313904/photo_-_Copy_c7lkcw.jpg"
          alt="profile"
          className="profile"
        />
      </div>
    </div>
  );
};

export default Header;
