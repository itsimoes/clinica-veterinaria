import React from "react";
import "./style.scss";

//icons
import NumbersIcon01 from "../../assets/numbers_icon_01.png";
import NumbersIcon02 from "../../assets/numbers_icon_02.png";
import NumbersIcon03 from "../../assets/numbers_icon_03.png";

const Numbers = () => {
  return (
    <div className="numbers_wrapper">
      <div className="numbers_container">
        <div className="numbers_card">
          <img className="numbers_icon" src={NumbersIcon01} alt="" />
          <h3 className="numbers_quantity">+34793</h3>
          <h3>Clientes felizes</h3>
        </div>
        <div className="numbers_card">
          <img className="numbers_icon" src={NumbersIcon02} alt="" />
          <h3 className="numbers_quantity">+45382</h3>
          <h3>Atendimentos</h3>
        </div>
        <div className="numbers_card">
          <img className="numbers_icon" src={NumbersIcon03} alt="" />
          <h3 className="numbers_quantity">+54762</h3>
          <h3>Vacinações</h3>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
