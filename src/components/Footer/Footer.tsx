import React from "react";
import "./style.scss";

// image
import YourLogo from "../../assets/your_logo.png";

//icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div className="footer_text_container">
          <div className="footer_text_card_container">
            <h3>Sobre nós</h3>
            <a>História</a>
            <a>Nosso time</a>
            <a>Termos e condições</a>
            <a>Política de privacidade</a>
          </div>
          <div className="footer_text_card_container">
            <h3>Serviços</h3>
            <a>Como adotar</a>
            <a>Status do pedido</a>
            <a>Promoções</a>
            <a>Métodos de pagamento</a>
          </div>
          <div className="footer_text_card_container">
            <h3>Siga-nos nas redes sociais!</h3>
            <div className="footer_socialmedia_icons_container">
              <a className="footer_socialmedia_icon">
                <FaInstagram />
              </a>
              <a className="footer_socialmedia_icon">
                <FaFacebook />
              </a>
              <a className="footer_socialmedia_icon">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <img className="footer_logo" src={YourLogo} />
      </div>
    </div>
  );
};

export default Footer;
