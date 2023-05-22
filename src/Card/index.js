import React from "react";
import "./index.css";

function Card(props) {
  const { title, channel, views, timestamp, thumbnailImage, image } = props;

  return (
    <div className="video-card">
      <img src={thumbnailImage} alt={channel} className="thumbnail-image" />

      <div className="card-info">
        <img src={image} alt={channel} className="profile mr-2" />
        <div className="video-info-text">
          <h6>{title}</h6>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
