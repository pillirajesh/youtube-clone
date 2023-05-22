import "./index.css";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdOutlineHistory,
} from "react-icons/md";

import React from "react";

function Footer() {
  let iconsList3 = [
    { image: <AiFillHome /> },
    { image: <MdOutlineSubscriptions /> },
    { image: <AiOutlinePlusCircle /> },
    { image: <MdVideoLibrary /> },
    { image: <MdOutlineHistory /> },
  ];

  return (
    <div className="footer-container">
      <ul className="footer-list">
        {iconsList3.map((icon) => (
          <li key={icon.name} className="list-items">
            <span className="icons">{icon.image}</span>
            <p className="mt-2 ml-2 icon-name">{icon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
