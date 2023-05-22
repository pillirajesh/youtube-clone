import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  MdWhatshot,
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdOutlineHistory,
  MdOndemandVideo,
  MdWatchLater,
  MdThumbUp,
  MdExpandMore,
} from "react-icons/md";
import "./index.css";

function Sidebar() {
  let iconsList = [
    { image: <AiFillHome />, name: "Home" },
    { image: <MdWhatshot />, name: "Trending" },
    { image: <MdOutlineSubscriptions />, name: "Subscription" },
  ];

  let iconsList2 = [
    { image: <MdVideoLibrary />, name: "Library" },
    { image: <MdOutlineHistory />, name: "History" },
    { image: <MdOndemandVideo />, name: "Your Videos" },
    { image: <MdWatchLater />, name: "Watch Later" },
    { image: <MdThumbUp />, name: "Liked Videos" },
    { image: <MdExpandMore />, name: "Show more" },
  ];

  return (
    <div className="sidebar-container">
      <ul className="unordered-list">
        {iconsList.map((icon) => (
          <li key={icon.name} className="list-items">
            <span className="icons">{icon.image}</span>
            <p className="mt-2 ml-2 icon-name">{icon.name}</p>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="unordered-list">
        {iconsList2.map((icon) => (
          <li key={icon.name} className="list-items">
            <span className="icons">{icon.image}</span>
            <p className="mt-2 ml-2 icon-name">{icon.name}</p>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Sidebar;
