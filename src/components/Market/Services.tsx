import React from "react";
import "./style.scss";

//images
import ServicesCard01 from "../../assets/services_card_01.png";
import ServicesCard02 from "../../assets/services_card_02.png";
import ServicesCard03 from "../../assets/services_card_03.png";

const Services = () => {
  return (
    <div id="services" className="wrapper market_wrapper">
      <div className="container market_container">
        <div className="market_text_container">
          <h2>Serviços</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel
            natus laborum earum, hic ullam illum nulla nisi sint autem est omnis
            blanditiis ea minima, saepe exercitationem.
          </p>
        </div>
        <div className="market_cards_wrapper">
          <div className="market_card_container">
            <img className="market_card" src={ServicesCard01} alt="" />
            <h3>Veterinário de plantão</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="market_card_container">
            <img className="market_card" src={ServicesCard02} alt="" />
            <h3>Tratamento Veterinário</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="market_card_container">
            <img className="market_card" src={ServicesCard03} alt="" />
            <h3>Tratamento Dentário</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
