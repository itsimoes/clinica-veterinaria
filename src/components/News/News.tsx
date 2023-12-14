import React from "react";
import "./style.scss";

// images
import NewsCard01 from "../../assets/news_card_01.png";
import NewsCard02 from "../../assets/news_card_02.png";
import NewsCard03 from "../../assets/news_card_03.png";

const News = () => {
  return (
    <div className="news_wrapper">
      <div className="news_container">
        <div className="news_text_container">
          <h2>Posts Recentes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            nobis minima assumenda cum, ab veritatis.
          </p>
        </div>
        <div className="news_cards_wrapper">
          <div className="news_card_container">
            <img className="news_card_image" src={NewsCard01} alt="" />
            <div className="news_card_text_container">
              <p className="news_card_text_title">
                Somos veterinários e amamos os animais.
              </p>
              <a className="news_card_text_date">7 de Novembro de 2023</a>
              <p className="news_card_text_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nobis minima.
              </p>
              <a className="news_card_text_more">Saiba mais...</a>
            </div>
          </div>
          <div className="news_card_container">
            <img className="news_card_image" src={NewsCard02} alt="" />
            <div className="news_card_text_container">
              <p className="news_card_text_title">
                Somos veterinários e amamos os animais.
              </p>
              <a className="news_card_text_date">12 de Dezembro de 2023</a>
              <p className="news_card_text_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nobis minima.
              </p>
              <a className="news_card_text_more">Saiba mais...</a>
            </div>
          </div>
          <div className="news_card_container">
            <img className="news_card_image" src={NewsCard03} alt="" />
            <div className="news_card_text_container">
              <p className="news_card_text_title">
                Somos veterinários e amamos os animais.
              </p>
              <a className="news_card_text_date">24 de Dezembro de 2023</a>
              <p className="news_card_text_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nobis minima.
              </p>
              <a className="news_card_text_more">Saiba mais...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
