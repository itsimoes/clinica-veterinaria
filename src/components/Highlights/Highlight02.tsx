import React from "react";
import "./style.scss";
import { Link } from "react-scroll";

const Highlight02 = () => {
  return (
    <div className="wrapper highlight01_wrapper">
      <div className="highlights_container container">
        <div id="embed_video_container_2">
          <iframe
            className="embed_video"
            src="https://www.youtube.com/embed/NUEaHPuPIi4?si=AimY9ukwtitJ5Ky3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div id="highlights_text_card_2" className="highlights_text_card">
          <h2>Nossa missão é cuidar de todos os animais.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            blanditiis sapiente earum voluptatibus dolorum necessitatibus eius
            fugit.
          </p>
          <Link to="products" smooth className="button_type_3">
            Adotar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Highlight02;
