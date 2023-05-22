import React from "react";
import Card from "../Card";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdOutlineHistory,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./index.css";

function Videos() {
  let iconsList3 = [
    { image: <AiFillHome />, name: "home" },
    { image: <MdOutlineSubscriptions />, name: "subscription" },
    { image: <AiOutlinePlusCircle />, name: "add-video" },
    { image: <MdVideoLibrary />, name: "library" },
    { image: <MdOutlineHistory />, name: "history" },
  ];
  return (
    <div className="videos-container">
      <h4 className="mb-3">Recomended</h4>
      <div className="videos">
        <Link
          to="https://www.youtube.com/watch?v=fSmp7Cv-c_0&pp=ygUhcHJlcmVxdWlzaXRlcyB0byBsZWFybiBtZXJuIHN0YWNr"
          className="link"
        >
          <Card
            title="Prerequisite to learn MERN Stack"
            views="1M Views"
            timestamp="1 Year ago"
            channelImage=""
            channel="Thapa Technical"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRQK2cVHRsiN2je7dDguGOHSnjmLpv0EbAg&usqp=CAU"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link
          to="https://youtu.be/i701DGspTog?list=PLwGdqUZWnOp3Zk1tVHAnbw8vOTl4NHpg1"
          className="link"
        >
          <Card
            title="ReactJs Website Tutorial"
            views="482k Views"
            timestamp="2 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMLl6osNM7Fp81G1QYZlSQyj3HBJ_4h-7ow&usqp=CAU"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link to="https://youtu.be/68Jd7GXZPe8" className="link">
          <Card
            title="MERN Stack MongoDB Atlas"
            views="42k Views"
            timestamp="2 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qgApA7PR_D8COybAlVmyJJEOCJsUN5nE4Q&usqp=CAU"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link to="https://youtu.be/zPZpq4JYx40" className="link">
          <Card
            title="Live Search Filters"
            views="1M Views"
            timestamp="2 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dGue8R8S-mi8dBm_p3U6qy57sa3nfnMSQw&usqp=CAU"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link
          to="https://www.youtube.com/watch?v=GBKlgg8WrkE&pp=ygURdHlwZSB3cml0ZXIgdGhhcGE%3D"
          className="link"
        >
          <Card
            title="Typewriter Effect in Website"
            views="400k Views"
            timestamp="1 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSy711_Kg08--p8Zog2TJ54z8QlgWUjpDRw&usqp=CAU"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link
          to="https://www.youtube.com/watch?v=tZxLYupcU9I&pp=ygUkZ2F0ZSAyMDIxIHRoZW9yaWVzIG9mIGZhaWx1cmUgcGFydCAy"
          className="link"
        >
          <Card
            title="Theories of Failure"
            views="200k Views"
            timestamp="1 Year ago"
            channel="Unacademy"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbtROLmfOuiAIj7bNRFAo5c31qhcavhZsXw&usqp=CAU"
            image="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684728376/thoery_b93vev.jpg"
          />
        </Link>

        <Link
          to="https://youtu.be/S0tNby6AA6M?list=PLiSPNzs4fD9tyI_gNHcQkvtvzLvB3aE05"
          className="link"
        >
          <Card
            title="Engineering Mechanics"
            views="200k Views"
            timestamp="1 Year ago"
            channel="Unacademy"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWFvilX5i9fvdMeT-EQae62nPvV1bhT-XEg&usqp=CAU"
            image="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684728292/engi_hmquwy.jpg"
          />
        </Link>

        <Link
          to="https://www.youtube.com/watch?v=3k-1irOqPtc&pp=ygUqZ2F0ZSAyMDIzIG1lY2hhbmljYWwgZW5naW5lZXJpbmcgYW5hbHlzaXMg"
          className="link"
        >
          <Card
            title="GATE MEchanical 2023 Paper Analysis"
            views="482k Views"
            timestamp="2 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKPhNVgsOrv448gaTmzIHcqDRIIEoDx9KDg&usqp=CAU"
            image="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684728184/gate_jaaz1s.jpg"
          />
        </Link>

        <Link
          to="https://www.youtube.com/watch?v=FuUWQg8igsA&pp=ygUIY2hhdCBncHQ%3D"
          className="link"
        >
          <Card
            title="Chat GPT the End Game"
            views="504k Views"
            timestamp="4 Months ago"
            channel="CodeWithHarry"
            thumbnailImage="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684728463/code_iym7ys.jpg"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link
          to="https://www.youtube.com/watch?v=f4oPDjYMdF4&pp=ygUGbm9kZWpz"
          className="link"
        >
          <Card
            title="Rest API"
            views="88k Views"
            timestamp="2 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684727974/restapi_avrlmg.jpg"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link to="https://youtu.be/lsHzZYqaZ4s" className="link">
          <Card
            title="Host React Firebase Dynamic Website for Free"
            views="49k Views"
            timestamp="1 Year ago"
            channel="Thapa Technical"
            thumbnailImage="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684728085/host_qe1aiq.jpg"
            image="https://yt3.ggpht.com/ytc/AGIKgqMtuWDbBoKr5uSdFHmdaUCdcyh-5zRENrCDd_VxwA=s68-c-k-c0x00ffffff-no-rj"
          />
        </Link>

        <Link to="https://youtu.be/HHizdPvAOpc" className="link">
          <Card
            title="Host React Firebase Dynamic Website for Free"
            views="141k Views"
            timestamp="2 months ago"
            channel="GATE Wallah"
            thumbnailImage="https://res.cloudinary.com/djoz0tmyl/image/upload/v1684728798/ca_it3yt5.jpg"
            image="https://qph.cf2.quoracdn.net/main-qimg-62b9c8d615126a2c2f454be19607b50e-lq"
          />
        </Link>
      </div>
      <ul className="footer-list">
        {iconsList3.map((icon) => (
          <li key={icon.name} className="list-items">
            <span className="footer-icon">{icon.image}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videos;
