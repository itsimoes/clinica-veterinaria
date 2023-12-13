import React from "react";
import "./style.scss";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

//images
import TeamCard01 from "../../assets/team_card_01.png";
import TeamCard02 from "../../assets/team_card_02.png";
import TeamCard03 from "../../assets/team_card_03.png";

const Team = () => {
  return (
    <div className="team_wrapper">
      <div className="team_container">
        <div className="team_text_container">
          <h2>Nosso Time</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel
            natus laborum earum, hic ullam illum nulla nisi sint autem est omnis
            blanditiis ea minima, saepe exercitationem.
          </p>
        </div>
        <div className="team_cards_wrapper">
          <div className="team_card_container">
            <img className="team_card" src={TeamCard01} alt="" />
            <h3>Maria de Sousa</h3>
            <p>VETERINÁRIA</p>
            <div className="socialmedia_container">
              <a className="socialmedia_icon">
                <FaInstagram />
              </a>
              <a className="socialmedia_icon">
                <FaFacebook />
              </a>
              <a className="socialmedia_icon">
                <FaTwitter />
              </a>
              <a className="socialmedia_icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="team_card_container">
            <img className="team_card" src={TeamCard02} alt="" />
            <h3>Ana Nascimento</h3>
            <p>ADMINISTRADORA</p>
            <div className="socialmedia_container">
              <a className="socialmedia_icon">
                <FaInstagram />
              </a>
              <a className="socialmedia_icon">
                <FaFacebook />
              </a>
              <a className="socialmedia_icon">
                <FaTwitter />
              </a>
              <a className="socialmedia_icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="team_card_container">
            <img className="team_card" src={TeamCard03} alt="" />
            <h3>Shirley Carvalho</h3>
            <p>VETERINÁRIA</p>
            <div className="socialmedia_container">
              <a className="socialmedia_icon">
                <FaInstagram />
              </a>
              <a className="socialmedia_icon">
                <FaFacebook />
              </a>
              <a className="socialmedia_icon">
                <FaTwitter />
              </a>
              <a className="socialmedia_icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
