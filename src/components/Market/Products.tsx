import React from "react";
import "./style.scss";

//images
import ProductsCard01 from "../../assets/products_card_01.png";
import ProductsCard02 from "../../assets/products_card_02.png";
import ProductsCard03 from "../../assets/products_card_03.png";

const Products = () => {
  return (
    <div className="wrapper market_wrapper">
      <div className="container market_container">
        <div className="market_text_container">
          <h2>Filhotes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui vel
            natus laborum earum, hic ullam illum nulla nisi sint autem est.
          </p>
        </div>
        <div className="market_cards_wrapper">
          <div className="market_card_container">
            <img className="market_card" src={ProductsCard01} alt="" />
            <h3>
              <span>R$ 900</span> R$ 500
            </h3>
            <a className="button_type_04">Adotar</a>
          </div>
          <div className="market_card_container">
            <img className="market_card" src={ProductsCard02} alt="" />
            <h3>
              <span>R$ 700</span> R$ 400
            </h3>
            <a className="button_type_04">Adotar</a>
          </div>
          <div className="market_card_container">
            <img className="market_card" src={ProductsCard03} alt="" />
            <h3>
              <span>R$ 600</span> R$ 300
            </h3>
            <a className="button_type_04">Adotar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
