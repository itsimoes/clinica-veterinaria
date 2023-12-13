import React from "react";
import "./style.scss";

//image
import HomePet from "../../assets/home_dog.png"

const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="home_container">
        <div className="home_text_card">
          <h1>O cuidado que seu filhote precisava.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae qui
            aspernatur sapiente reprehenderit tempore debitis, unde incidunt.
            Optio, ratione.
          </p>
          <div className="home_button_container">
            <a className="button_type_1">Contate-nos</a>
            <a className="button_type_2">Nossos Serviços</a>
          </div>
        </div>
        <img src={HomePet} className="home_image_card" />
      </div>
    </div>
  );
};

export default Home;
