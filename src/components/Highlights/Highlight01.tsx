import React from "react";
import "./style.scss";

const Highlight01 = () => {
  return (
    <div className="wrapper highlight01_wrapper">
      <div className="highlights_container container">
        <div  id="highlights_text_card_1" className="highlights_text_card">
          <h2>Somos veterinários e amamos os animais.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            blanditiis sapiente earum voluptatibus dolorum necessitatibus eius
            fugit.            
          </p>
          <a className="button_type_03">Nossos Serviços</a>
        </div>
        <div id="embed_video_container_1">
          <iframe
            className="embed_video"
            src="https://www.youtube.com/embed/4EGFkF6loPM?si=3Kthk7gnbtLzMp-5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Highlight01;
